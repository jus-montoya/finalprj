import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// When deploying to http://esquivellabs.com/vuejs-routing/
// base must be set to '/vuejs-routing/' so assets load from /vuejs-routing/assets/
export default defineConfig({
  base: '/vuejs-routing/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})