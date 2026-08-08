import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // No trailing slash: react-router's basename doesn't carry one either
  // (Link to="/" collapses to exactly the basename), so mismatched slashes
  // between this and the BrowserRouter basename made Vite's base middleware
  // 404 on refresh at the bare "/Bowen-Zheng-Portfolio" URL.
  base: '/Bowen-Zheng-Portfolio',
})
