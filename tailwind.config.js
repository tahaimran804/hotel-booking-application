/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "slick-slider",
    "slick-track",
    "slick-slide",
    "slick-list",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};