/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins', 'san-serif']
      },
      backgroundColor: {
        navyBlue:['#0D0D2B'],
        lightBlue:['#3671E9'],
        white:['#ffffff'],
        purple:['#2B076E'],
      },
      colors:{
        white:['#ffffff'],
        black:['#000000'],
        lightBlue:['#3671E9'],
        gray:['#808080'],
      }
    },
  },
  plugins: [],
}

