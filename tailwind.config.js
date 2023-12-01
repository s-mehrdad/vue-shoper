/** @type {import('tailwindcss').Config} */
module.exports = {
  puge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variant: {
    extend: {},
  },
  plugins: [],
}

