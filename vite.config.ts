import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        families: [
          {
            name: 'Montserrat',
            styles: 'wght@700',
          },
          {
            name: 'Lato',
            styles: 'wght@100;300;400;600;700',
          },
        ],
      },
    }),
  ],
  base: '/bayraktar.elise/',
});
