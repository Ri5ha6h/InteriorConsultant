module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: '25rem',
        105: '30rem',
        110: '33rem',
        115: '40rem',
        120: '44rem',
        125: '51rem',
        150: '55rem',
      },
      screens: {
        xxs: '320px',
        xs: '480px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
