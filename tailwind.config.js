/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/modal.js"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
