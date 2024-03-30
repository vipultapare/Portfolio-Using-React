/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { 'xsm': { 'max': '640px' },
   
    },
  },
  plugins: [],
}
}

