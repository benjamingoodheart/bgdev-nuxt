// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/scripts',
    'nuxt-gtag',
        'nuxt-nodemailer'
  ],
  nodemailer: {
    from: '"Goodheart.dev" <hello@goodheart.dev>',
    host: 'live.smtp.mailtrap.io',
    port: 587,
    auth: {
      user: 'api',
      pass: process.env.NUXT_MAILTRAP_API,
    },
  },
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',
  gtag: {
    id: 'G-Z4EF9VBTX6'
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  
})