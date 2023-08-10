import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path";
const pathResolve = (dir: string) => resolve(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": pathResolve("./src"), // 新增
    },
  },
  server: {
    port: 3000,
    hmr: true,
    proxy: {
      '/npmdownloads': {
        target: 'https://npm-stat.com/api/download-counts',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/npmdownloads/, '')
      }
    }
  },
})
