module.exports = {
  purge: ['./pages/**/*.ts', './pages/**/*.tsx', './components/**/*.tsx', './components/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'core': '#4F4F4F',
        'primary': '#f4c244',
        'primary-hover': '#FFB703',
        'secondary': '#023047',
        'secondary-hover': '#04557d',
        'danger': '#C95D63',
        'danger-hover': '#d13740',
        'info': '#3DA5D9',
        "teal": '#319795',
      },
    },
    screens: {
      'tablet': { raw: '(min-width: 640px) and (min-height:820px)' },
      'laptop': { raw: '(min-width: 1024px) and (min-height:820px)' },
      'desktop': { raw: '(min-width: 1280px) and (min-height:820px)' }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
