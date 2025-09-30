import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: ["disintegrable-unrespited-asha.ngrok-free.dev"], // 👈 add your ngrok domain here
  },
});
