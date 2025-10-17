/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#FFB6C1',
        'romantic-rose': '#FF69B4',
        'romantic-purple': '#DDA0DD',
        'romantic-lavender': '#E6E6FA',
      },
      fontFamily: {
        'romantic': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
