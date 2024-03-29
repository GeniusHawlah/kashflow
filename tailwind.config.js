module.exports = {
  corePlugins: {
    // preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inter"],
      
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],


}
