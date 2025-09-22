import path from "path";
import { createServer } from "./index";
import * as express from "express";

const app = createServer();
const port = process.env.PORT || 3000;

// In production, serve the built SPA files
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");

console.log(`📁 Serving static files from: ${distPath}`);
console.log(`📂 Current directory: ${__dirname}`);

// Serve static files with better error handling
try {
  app.use(express.static(distPath, {
    fallthrough: true,
    maxAge: '1d'
  }));
  console.log(`✅ Static file serving configured for ${distPath}`);
} catch (error) {
  console.error(`❌ Error configuring static files:`, error);
}

// Add health check endpoint for Render
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    distPath: distPath
  });
});

// Add a test endpoint
app.get("/test", (req, res) => {
  res.json({ message: "Server is working!", timestamp: new Date().toISOString() });
});

// Handle React Router - serve index.html for all non-API routes
app.get("*", (req, res) => {
  console.log(`📄 Handling request for: ${req.path}`);
  
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health") || req.path.startsWith("/test")) {
    console.log(`❌ API endpoint not found: ${req.path}`);
    return res.status(404).json({ error: "API endpoint not found", path: req.path });
  }

  try {
    const indexPath = path.join(distPath, "index.html");
    console.log(`📤 Serving index.html from: ${indexPath}`);
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error(`❌ Error serving index.html:`, err);
        res.status(500).json({ error: "Failed to serve page", details: err.message });
      }
    });
  } catch (error) {
    console.error(`❌ Error in catch-all route:`, error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Server is ready and accepting connections`);
  console.log(`🔧 API endpoints available at /api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
