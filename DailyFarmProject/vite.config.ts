import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: '127.0.0.1',
    port: 8000,
  },

  plugins: [react(),
      tailwindcss(),
    VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      theme_color: "#8936FF",
      background_color: "#2EC6FE",
      screenshots:[
        {
          src:"./screenshots/desktop.png",
          type:"image/png",
          sizes:"1791x839",
          form_factor:"wide"
        },
        {
          src:"./screenshots/mobile.png",
          type:"image/png",
          sizes:"405x913",
          form_factor:"narrow"
        }
      ],
      icons: [
        {
          src: 'icon512_rounded.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png'
        },


        {
          purpose: "maskable",
          sizes: "512x512",
          src: "icon512_maskable.png",
          type: "image/png"
        },
        {
          purpose: "any",
          sizes: "512x512",
          src: "icon512_rounded.png",
          type: "image/png"
        }

      ],
      orientation: "any",
      display: "standalone",
      // dir: "auto",
      lang: "en",
      name: "toGotoEat",
      short_name: "toGotoEat",
      start_url: "/"
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})