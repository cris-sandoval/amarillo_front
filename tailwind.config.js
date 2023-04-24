/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme: {
  extend: {
    backgroundImage: {
      'img-nav': 'url("public/imagenes/img-nav.png")'
    },
    Image: {
      'nav-mob': 'url("url("public/imagenes/Nav-mobile.png")'
    }
  }
  },
  variants: {},
  plugins: []
 }