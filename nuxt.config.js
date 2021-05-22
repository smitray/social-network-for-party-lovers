import path from 'path'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/saloon-marketplace/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Saloon Marketplace App',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css', '@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  generate: {
    minify: {
      removeRedundantAttributes: false,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-partial-import': {},
        'postcss-crip': {},
        'postcss-nested-props': {},
        'postcss-map': {
          basePath: path.resolve(__dirname, 'styleVars'),
          maps: ['fonts.yml', 'colors.yml', 'breakpoints.yml'],
        },
        'postcss-mixins': {},
        'postcss-advanced-variables': {},
        'postcss-short': {},
        'postcss-cssnext': {
          browsers: [
            'last 5 versions',
            'Opera 12.1',
            'safari >= 8',
            'ie >= 10',
            'ff >= 20',
            'ios 6',
            'android 4',
            'ie >= 9',
          ],
          features: {
            nesting: false,
            autoprefixer: false,
          },
        },
        'postcss-nested': {},
        'postcss-ref': {},
        'postcss-property-lookup': {},
        'postcss-utilities': {},
        'rucksack-css': {},
        'postcss-extend': {},
        'postcss-merge-rules': {},
        'postcss-sort-media-queries': {},
      },
    },
  },
}
