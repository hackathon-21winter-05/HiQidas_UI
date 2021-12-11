import { defineConfig } from 'vite'
import path from 'path'
import VuePlugin from '@vitejs/plugin-vue'

const srcPath = path.resolve(__dirname, './src').replace(/\\/g, '/')

const DEV_SERVER_PROXY_HOST = 'https://hiqidas.trap.games/'

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
