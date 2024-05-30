import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EEEEEE",
        primary: "#615EFC",
        secondary: "#D1D8C5",
        tertiary: "#27374d",
        onBackground: "#023047",
        onPrimary: "#EEEEEE"
      },
      keyframes: {
        scrollKF: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-100%))",
          },
        },
      },
      animation: {
        scroll: "scrollKF 15s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
