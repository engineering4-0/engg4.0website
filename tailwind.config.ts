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
        background: "#f9f5f6",
        primary: "#6d8b74",
        secondary: "#dbaabb",
        tertiary: "#27374d",
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
