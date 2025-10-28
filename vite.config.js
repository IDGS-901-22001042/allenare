import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // <--- Inicio de VitePWA (SIN 'test' adentro)
      registerType: "autoUpdate",
      injectRegister: "auto",
      pwaAssets: {
        disabled: false,
        config: true,
      },
      manifest: {
        name: "allenare",
        short_name: "allenare",
        description: "allenare",
        theme_color: "#ffffff",
        display_override: [
          "fullscreen",
          "minimal-ui",
          "window-controls-overlay",
        ],
        display: "standalone",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }), // <--- Fin de VitePWA
  ], // <--- Fin del array 'plugins'

  // 👇 Mueve todo el bloque 'test' aquí afuera, al mismo nivel que 'plugins'
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js", // Asegúrate que este archivo exista si lo necesitas
    reporters: ["junit"],
    outputFile: {
      junit: "./junit.xml",
    },
  },
}); // <--- Fin de defineConfig
