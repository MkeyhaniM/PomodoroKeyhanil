/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "Russo-One":['Russo One', 'cursive'],
        "Josefin-Sans":['Josefin Sans', 'sans-serif'],
        "Signika-Negative":['Signika Negative', 'sans-serif'],
      }
    },
  },
  plugins: [],
}