import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createServer } from "./server";

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
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
    minify: mode === "production" ? "esbuild" : false,
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    react({
      // Use automatic JSX runtime with Babel
      jsxRuntime: 'automatic',
    }),
    // Only used in development, ignored in production
    expressPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  // Define environment variables properly
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode === 'production' ? 'production' : 'development'),
    __VITE_MODE__: JSON.stringify(mode),
    // Force React into production mode
    __DEV__: JSON.stringify(mode !== 'production'),
    'import.meta.env.DEV': JSON.stringify(mode !== 'production'),
    'import.meta.env.PROD': JSON.stringify(mode === 'production'),
  },
  // Ensure proper optimization for production
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
};
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
