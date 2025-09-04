import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: 
    [
      vue(),
      VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        name: "Movie Explorer",
        short_name: "Movies",
        description: "Search and explore movies with OMDb API",
        theme_color: "#242424",
        background_color: "#242424",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/www\.omdbapi\.com\/.*/,
            handler: "CacheFirst",
            options: {
              cacheName: "omdb-api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),

    ],
})
