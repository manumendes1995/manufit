import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANTE: base TEM de ser o nome do teu repo no GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/manufit/',
})
