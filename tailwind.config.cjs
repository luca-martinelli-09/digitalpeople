/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        background: "#fff",
        "background-dark": "#251B37"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
