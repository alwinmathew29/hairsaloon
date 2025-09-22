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

  // Middleware
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}
