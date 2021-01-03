module.exports = {
  purge: ['./pages/**/*.ts', './pages/**/*.tsx', './components/**/*.tsx', './components/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   'tablet': '640px',
    //   'laptop': '1024px',
    //   'desktop': '1280px',
    // },
    screens: {
      'tablet': { raw: '(min-width: 640px) and (min-height:820px)' },
      'laptop': { raw: '(min-width: 1024px) and (min-height:820px)' },
      'desktop': { raw: '(min-width: 1280px) and (min-height:820px)' }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
