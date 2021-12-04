import { defineConfig } from 'vite'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'

const srcPath = path.resolve(__dirname, 'src').replace(/\\/g, '/')

// 仮
const DEV_SERVER_PROXY_HOST = 'http://localhost:3000'

export default defineConfig(() => ({
  resolve: {
    alias: {
      '@': srcPath,
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: DEV_SERVER_PROXY_HOST,
        changeOrigin: true,
        ws: true,
      },
    },
  },
  plugins: [VuePlugin()],
}))
