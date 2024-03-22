/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#4294E3',
        'primary': '#8d3462', //skillpil color code
        'secondary': '#8F12FD',
        // 'secondary': '#8F12FD',//skillpill code
        'light': '#F0F6FF',
        'dark': '#262B47',
        'body-color':'#919294',
      },
    },
  },
  plugins: [],
  extract: true,
};