import path from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
          javascriptEnabled: true,
          additionalData:  `@import "${path.resolve(__dirname, './src/assets/style/base.less')}";`
      }
    }
  }
})
