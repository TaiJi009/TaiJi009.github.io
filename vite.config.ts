import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// 使用相对路径，便于 GitHub Pages「项目站点」部署在子路径（/仓库名/）时正确加载 JS/CSS
export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
