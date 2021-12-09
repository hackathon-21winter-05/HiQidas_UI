import { defineConfig } from 'vite'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'

const srcPath = path.resolve(__dirname, './src').replace(/\\/g, '/')

const DEV_SERVER_PROXY_HOST = 'http://localhost:7070'

export default defineConfig(() => ({
  resolve: {
    alias: {
      '/@': srcPath,
    },
  },
  server: {
    port: 7071,
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
