import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  site: 'https://elisebayraktar.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
})
