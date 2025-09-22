import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

export default defineConfig({
  root: path.resolve(__dirname, "."),
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["hairsaloon-yojh.onrender.com", "localhost"], // 👈 allow Render host
    fs: {
      allow: [
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared"),
        path.resolve(__dirname),
      ],
      deny: [".env", ".env.", ".{crt,pem}", "/.git/", "server/"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [
    react(),
    // Only used in development, ignored in production
    expressPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});

// Dev-only plugin to run Express inside Vite dev server
function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // only runs in `vite` dev mode
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}
