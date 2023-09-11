import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/film': "https://video-streaming-390616.lm.r.appspot.com"
    }
  },
  plugins: [react()],
})
