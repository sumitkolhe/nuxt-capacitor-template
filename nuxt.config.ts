import { NuxtConfig } from '@nuxt/types/config'
import colors from 'vuetify/es5/util/colors'

export const nuxtAppConfig: NuxtConfig = {
  target: 'static',
  head: {
    titleTemplate: '%s - sample',
    title: 'sample',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],

  modules: ['@nuxtjs/axios'],

  axios: {},
  generate: {
    dir: './dist',
    fallback: true,
  },
  srcDir: 'src/',

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},

  server: {
    port: 3000, // default: 3000
    host: '192.168.0.150', // default: localhost,
  },
}

export default nuxtAppConfig
