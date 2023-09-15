/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors:{
        primary: '#28D07E',
        dark: '#475569',
        about: '#F0FCFA',
      },
       fontFamily: {
        jost: ["Jost"],
        caveat: ["Caveat"]
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

