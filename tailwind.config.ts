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
      },
    ],
  },
  plugins: [require('daisyui')],
};

export default config;
