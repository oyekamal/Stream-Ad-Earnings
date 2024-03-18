import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // This makes the server accessible from outside the container
    port: 5173, // Ensure this matches the port you want to use
  },
  plugins: [react()],
})
