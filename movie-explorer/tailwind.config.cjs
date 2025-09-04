module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: 'media', // or 'class' if you want to toggle dark mode manually
  theme: {
    extend: {
      colors: {
        brandBlue: '#646cff',
        brandBlueHover: '#535bf2',
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
