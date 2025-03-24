// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss', 'nuxt-gtag', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  css: ["assets/app.css"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'recursionunit',
      meta: [
        { 
          name: 'description', 
          content: 'recursiounit: technology consulting | solutions archtecture' 
        },
        { 
          name: 'keywords', 
          content: 'recursionunit, technology consulting, solutions architecture, data engineering, big data, artificial intelligence, ai, machine learning, ml, toronto' 
        }
      ]
    }
  },
  site: { 
    url: 'https://recursionunit.io', 
    name: 'recusionunit' 
  },
  gtag: {
    id: 'G-EKRWWX1PX0'
  }
})