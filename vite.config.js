import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["MANUFIT.png"], // arquivo está em public/
      manifest: {
        name: "Manufit",
        short_name: "Manufit",
        description: "Planos renovados a cada 30 dias. Treinos e cardápios.",
        theme_color: "#ff4da6",
        background_color: "#0f0f12",
        display: "standalone",
        scope: "/manufit/",
        start_url: "/manufit/",
        icons: [
          {
            src: "MANUFIT.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,webp}"]
      }
    })
  ],
  base: "/manufit/"
});
