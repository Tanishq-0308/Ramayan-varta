/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'rozha':['Rozha One','sans-serif'],
        'martel':['Martel','sans-serif']
      },
    },
  },
  plugins: [],
}