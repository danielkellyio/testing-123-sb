import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { preventInfiniteLoopsVitePlugin } from './internal/vite-plugin-prevent-infinite-loops'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), preventInfiniteLoopsVitePlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
