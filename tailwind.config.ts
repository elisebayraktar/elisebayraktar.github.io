import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes").light,
          primary: "#007791",
          secondary: "#005F74",
        },
        dark: {
          ...require("daisyui/src/theming/themes").dark,
          primary: "#007791",
          secondary: "#87b2c1",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

export default config;
