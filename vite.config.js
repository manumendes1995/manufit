import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite + React com proxy para o backend Stripe em http://localhost:4242
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Tudo que começar por /api no frontend vai para o servidor Node (server/index.js)
      '/api': 'http://localhost:4242'
    }
  }
})
