// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),],
  define: {
    __COLORS__: {
      primary: '#E63946',
      secondary: '#F6C90E',
      secondaryNav: '#FFF4E0',
      accent: '#F2C744',
      text: '#4A4A4A',
      white: '#FFFFFF',
    },
  },
})