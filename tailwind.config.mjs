/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
      colors: {
        colors: {
          "background-color": "rgb(135, 117, 78)",
          "secondary-color": "rgb(161, 161, 159)",
          "main-color": "rgb(135, 117, 77)",
          "text-color": "rgb(53, 62, 56)",
          "image-color": "rgb(136, 118, 78)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
