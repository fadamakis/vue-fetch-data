import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: "/vue-fetch-data/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})