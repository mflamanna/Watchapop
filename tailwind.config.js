/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'newGreen': '#C2DED1',
        'newYellow': '#ECE5C7',
        'newBeige': '#CDC2AE',
        'newBlue': '#354259'
    },},
  },
  plugins: [],
}
