import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      title: ['Montserrat', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#007791',
          'primary-content': '#ffffff',
          neutral: '#C5DADF',
          'base-100': '#F5F5F5',
          'base-200': '#ffffff',
          'base-content': '#262626',
        },
        dark: {
          primary: '#6fa3b5',
          'primary-content': '#121212',
          neutral: '#C5DADF',
          'base-100': '#282828',
          'base-200': '#3f3f3f',
          'base-content': '#ffffff',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

export default config;
