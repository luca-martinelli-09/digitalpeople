/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['"Noto Sans"', 'sans-serif']
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
        'y-2': '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-fluid-type"),
    require('@tailwindcss/forms'),
  ],
}
