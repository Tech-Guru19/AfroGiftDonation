import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // allow external hosts
    port: 5173,         // make sure it matches your local dev server
    strictPort: true,   // prevent Vite from picking a different port
    allowedHosts: 'all' // allow any host, including ngrok
  }
})
