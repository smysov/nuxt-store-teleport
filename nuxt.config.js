export default {
  head: {
    title: 'fortnite',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: 'green' },

  css: [
    '@/assets/styles/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
  ],

  plugins: ['~/plugins/axios'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/svg-sprite'],

  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  axios: {},

  styleResources: {
    scss: [
      '@/assets/styles/import/_variables.scss',
      '@/assets/styles/import/_mixins.scss',
    ],
  },

  svgSprite: {},

  build: {
    babel: {
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
      ],
    },
  },
};
