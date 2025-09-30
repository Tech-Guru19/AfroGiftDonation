import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // allow network/remote hosts
    port: 5173,         // ensure this matches your dev server port
    strictPort: true,   // prevent Vite from picking another port
    allowedHosts: 'all' // accept any host (ngrok included)
  }
})
