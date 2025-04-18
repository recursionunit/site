// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    //'@nuxt/content',
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-gtag",
    "@nuxtjs/seo",
  ],
  css: ["assets/app.css"],
  app: {
    pageTransition: { name: "layout", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "recursionunit",
      meta: [
        {
          name: "description",
          content: "technology consulting | solutions archtecture",
        },
        {
          name: "keywords",
          content:
            "recursionunit, technology consulting, solutions architecture, data engineering, big data, artificial intelligence, ai, machine learning, ml, toronto",
        },
      ],
    },
  },
  site: {
    url: "https://recursionunit.io",
    name: "solutions architecture",
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "recursionunit",
    },
  },
  gtag: {
    id: "G-EKRWWX1PX0",
  },
  image: {
    inject: true,
  },
});
