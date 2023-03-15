/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Roboto':['Roboto', 'sans-serif'],
      },
      colors:{
        "primary":'rgb(29,29,29)',
        "primarydark":'rgb(18,18,18)',
        "secondary":'rgb(237,86,21)',
        "secondarydark":'rgb(197,72,18)',
        "tertiary":"#fff",
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}