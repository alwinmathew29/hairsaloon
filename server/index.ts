import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // CORS configuration
  const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://hairsaloon-yojh.onrender.com']
      : ['http://localhost:8080', 'http://localhost:3000', 'http://127.0.0.1:8080'],
    credentials: true,
    optionsSuccessStatus: 200
  };

  console.log(`🔧 CORS configured for environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Allowed origins:`, corsOptions.origin);

  // Middleware
  app.use(cors(corsOptions));
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Request logging middleware
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    try {
      const ping = process.env.PING_MESSAGE ?? "ping";
      console.log(`🏓 Ping endpoint called, responding with: ${ping}`);
      res.json({ message: ping, timestamp: new Date().toISOString() });
    } catch (error) {
      console.error(`❌ Error in ping endpoint:`, error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/demo", (req, res) => {
    try {
      handleDemo(req, res);
    } catch (error) {
      console.error(`❌ Error in demo endpoint:`, error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Global error handler
  app.use((err: any, req: any, res: any, next: any) => {
    console.error(`❌ Global error handler caught:`, err);
    res.status(500).json({ 
      error: "Internal server error", 
      message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
  });

  return app;
}
