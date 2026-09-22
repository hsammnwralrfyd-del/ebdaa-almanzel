import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/ebdaa-almanzel/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Copy server config files to dist after build
    {
      name: "copy-server-config",
      closeBundle() {
        if (mode === "production") {
          try {
            copyFileSync("public/.htaccess", "dist/.htaccess");
            copyFileSync("public/web.config", "dist/web.config");
            copyFileSync("public/404.html", "dist/404.html");
          } catch (err) {
            console.warn("Could not copy server config files:", err);
          }
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    minify: mode === "production" ? "esbuild" : false,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-accordion",
          ],
          "query-vendor": ["@tanstack/react-query"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
