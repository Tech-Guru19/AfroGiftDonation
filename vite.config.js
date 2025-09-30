import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ensures assets load correctly from any host
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['disintegrable-unrespited-asha.ngrok-free.dev'] // your ngrok URL
  }
});
