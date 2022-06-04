const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      "white": colors.white,
      "black": colors.black,
      "slate": colors.slate,
      "purple": "#AF52DE"
    },
    extend: {},
  },
  plugins: [],
};
