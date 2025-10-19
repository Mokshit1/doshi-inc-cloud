import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ensures relative paths work on Vercel
  build: {
    outDir: 'dist' // Vite build output
  }
})
