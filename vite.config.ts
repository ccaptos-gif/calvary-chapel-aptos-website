import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Serve /admin and /admin/ from public/admin/index.html so Decap CMS
// loads instead of being captured by the React Router SPA fallback.
function adminFallback() {
  return {
    name: 'serve-admin-html',
    configureServer(server: import('vite').ViteDevServer) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/admin' || req.url === '/admin/') {
          req.url = '/admin/index.html'
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), adminFallback()],
})
