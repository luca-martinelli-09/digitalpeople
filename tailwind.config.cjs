/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['"Roboto Slab"', 'serif'],
      display: ['"Voltaire"', 'sans-serif'],
    },
    extend: {
      colors: {
        background: "#FFF8F3",
        "background-dark": "#251B37"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
