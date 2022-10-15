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
      },
      boxShadow: {
        'solid': '0.25rem 0.25rem',
        'solid-y': '0px 0.25rem',
        'solid-y-2': '0px 0.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
