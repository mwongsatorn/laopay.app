module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'noto-sans-lao': ['Noto Sans Lao', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#293462',
        'primary-red': '#D61C4E',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
