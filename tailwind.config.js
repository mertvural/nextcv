/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      borderWidth : {
        "b-1" : "1px"
      },
      fontSize : {
        "xxs" : "0.55rem",
        "md" : "1.1rem",
        "em1" : "1em",
        "em1.5" : "1.5em",
        "px11" : "11px"
      },
      flex : {
        '2' : '2' 
      },
     colors : {
      'primary' : '#111111',
      'secondary' : '#f9bf2d'
     }
    },
  },
  plugins: [],
}
