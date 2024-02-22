/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./formkit.theme.ts', './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [require('@formkit/tailwindcss')]
}
