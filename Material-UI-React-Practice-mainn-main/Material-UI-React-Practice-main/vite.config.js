import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ¡No uses './'!
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
