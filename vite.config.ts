import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

export default defineConfig(({ mode }) => ({
  root: path.resolve(__dirname, "."),
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["hairsaloon-yojh.onrender.com", "localhost"],
    fs: {
      allow: [
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared"),
        path.resolve(__dirname),
      ],
      deny: [".env", ".env.", ".{crt,pem}", "/.git/", "server/"],
    },
    // Disable HMR in production
    hmr: mode === "development",
  },
  build: {
    outDir: "dist/spa",
    // Disable minification for debugging if needed
    minify: mode === "production" ? "esbuild" : false,
    sourcemap: mode === "development",
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
  // Define environment variables
  define: {
    __VITE_MODE__: JSON.stringify(mode),
  },
}));

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
