import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007791',
        'primary-200': '#C5DADF',
        'primary-100': '#E8F1F2',
        secondary: '#FF6B6B',
        menth: '#A9E5D7',
      },
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      title: ['Montserrat', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};

export default config;
