import react from '@vitejs/plugin-react'
import path from 'path'
import type { InlineConfig, UserConfig } from 'vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.tsx'],
    environment: ['happy-dom'],
  },
  // NOTE: isso é necessário para usar as configuracoes do vitest no config do vite
} as UserConfig & {
  test: InlineConfig
})
