import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        darkPink: "#db6148",
        foreground: "var(--foreground)",
        pink: "#F09F8F",
        softGrey: "#f2efee",
        softGreyTwo: "#d4dae0",
      },
      animation: {
        "progress-bar": "1s ease-out 0s 1 normal forwards running",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
