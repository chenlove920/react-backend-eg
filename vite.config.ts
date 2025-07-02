import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteAliases } from 'vite-aliases'
// https://vite.dev/config/
export default defineConfig({
  define: {
     __API_URL__: 'http://geek.itheima.net/v1_0',
  },
  plugins: [react(),ViteAliases({prefix:'@'})],
})
