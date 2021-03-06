export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LaoPay Super App',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: ['min-w-[320px]', 'min-h-screen'],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/Icons', prefix: 'Icon' },
    { path: '~/components/Icons/LaoPayFeatures', prefix: 'Icon' },
    { path: '~/components/Icons/NavigationMenu', prefix: 'Icon' },
    { path: '~/components/HomePage' },
    { path: '~/components/ProductsAndServicesPage' },
    { path: '~/components/AppHeaderComponent' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'lo', iso: 'lo-LA' },
      { code: 'en', iso: 'en-US' },
    ],
    defaultLocale: 'lo',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      fallbackLocale: 'en',
    },
    vueI18n: {
      fallbackLocale: 'lo',
    },
    vueI18nLoader: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
