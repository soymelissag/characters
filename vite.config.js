import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Bind to all interfaces so the preview proxy in the remote/cloud
    // environment can reach the dev server.
    host: true,
    port: 5173,
    strictPort: true,
    // Accept requests forwarded through the preview proxy's own hostname,
    // otherwise Vite answers "Blocked request. This host is not allowed."
    allowedHosts: true,
  },
})
