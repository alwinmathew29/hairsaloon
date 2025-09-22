import path from "path";
import { createServer } from "./index";
import * as express from "express";
import { fileURLToPath } from "url";
import { existsSync, readdirSync } from "fs";

const app = createServer();
const port = process.env.PORT || 3000;

// Get proper directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, "../spa");

console.log(`🔍 Debug Information:`);
console.log(`📂 __dirname: ${__dirname}`);
console.log(`📁 distPath: ${distPath}`);
console.log(`📍 Process cwd: ${process.cwd()}`);
console.log(`🌍 NODE_ENV: ${process.env.NODE_ENV}`);

// Check if dist directory exists
if (existsSync(distPath)) {
  console.log(`✅ Dist directory exists at: ${distPath}`);
  try {
    const files = readdirSync(distPath);
    console.log(`📋 Files in dist directory:`, files);
    
    // Check for index.html specifically
    const indexPath = path.join(distPath, 'index.html');
    if (existsSync(indexPath)) {
      console.log(`✅ index.html found at: ${indexPath}`);
    } else {
      console.error(`❌ index.html NOT found at: ${indexPath}`);
    }
    
    // Check for assets directory
    const assetsPath = path.join(distPath, 'assets');
    if (existsSync(assetsPath)) {
      console.log(`✅ Assets directory found at: ${assetsPath}`);
      const assetFiles = readdirSync(assetsPath);
      console.log(`📋 Asset files:`, assetFiles);
    } else {
      console.error(`❌ Assets directory NOT found at: ${assetsPath}`);
    }
  } catch (error) {
    console.error(`❌ Error reading dist directory:`, error);
  }
} else {
  console.error(`❌ Dist directory does NOT exist at: ${distPath}`);
  console.log(`🔍 Let's check what's in the parent directory:`);
  const parentDir = path.resolve(__dirname, "..");
  try {
    const parentFiles = readdirSync(parentDir);
    console.log(`📋 Parent directory (${parentDir}) contains:`, parentFiles);
  } catch (error) {
    console.error(`❌ Error reading parent directory:`, error);
  }
}

// Serve static files with comprehensive error handling
try {
  app.use(express.static(distPath, {
    fallthrough: true,
    maxAge: '1d',
    setHeaders: (res, filePath) => {
      console.log(`📤 Serving static file: ${filePath}`);
    }
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

// Add debug endpoint to check file system
app.get("/debug", (req, res) => {
  const debugInfo = {
    distPath,
    distExists: existsSync(distPath),
    indexExists: existsSync(path.join(distPath, 'index.html')),
    assetsExists: existsSync(path.join(distPath, 'assets')),
    cwd: process.cwd(),
    dirname: __dirname,
    env: process.env.NODE_ENV,
    files: existsSync(distPath) ? readdirSync(distPath) : 'Directory does not exist',
    assetFiles: existsSync(path.join(distPath, 'assets')) ? readdirSync(path.join(distPath, 'assets')) : 'Assets directory does not exist'
  };
  res.json(debugInfo);
});

// Explicitly handle assets directory
app.use('/assets', express.static(path.join(distPath, 'assets'), {
  fallthrough: false,
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    console.log(`📦 Serving asset: ${filePath}`);
  }
}));

// Handle React Router - serve index.html for all non-API routes
app.use((req, res, next) => {
  console.log(`📄 Handling request for: ${req.path}`);
  
  // Skip if it's an API route, health check, test, or debug route
  if (req.path.startsWith("/api/") || 
      req.path.startsWith("/health") || 
      req.path.startsWith("/test") ||
      req.path.startsWith("/debug") ||
      req.path.startsWith("/assets/")) {
    return next();
  }

  // Skip if this is a request for a static file that exists
  if (req.path.includes('.')) {
    return next();
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

// 404 handler for unmatched routes
app.use((req, res) => {
  console.log(`❌ 404: Route not found: ${req.path}`);
  res.status(404).json({ error: "Route not found", path: req.path });
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
