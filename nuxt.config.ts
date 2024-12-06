// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/seo',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-Z4EF9VBTX6'
  },
  app:{
    head: {
    titleTemplate(titleChunk) {
      return titleChunk ? titleChunk : pkg.name
    }
  }}
})