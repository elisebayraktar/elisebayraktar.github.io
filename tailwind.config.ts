import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007791',
        'primary-light': '#f0fcff',
      },
    },
  },
  plugins: [],
};

export default config;
