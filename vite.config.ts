import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/calculatrice-react-tsx',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup',
  },
})
