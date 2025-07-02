import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteAliases } from 'vite-aliases'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),ViteAliases({prefix:'@'})],
  define: {
    __API_VERSION__: JSON.stringify('v1_0'),
    __API_URL__: JSON.stringify("http://geek.itheima.net")
  }
})
