import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@assets": path.resolve("./src/assets")
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    host: '192.168.18.21',
    hmr: {
      port: 3001,
    },
  },
})
