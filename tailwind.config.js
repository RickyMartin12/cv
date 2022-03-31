module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}