module.exports = {
  purge: ['./pages/**/*.ts', './pages/**/*.tsx', './components/**/*.tsx', './components/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
