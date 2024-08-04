
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/content"
  ],
  css: [
    "assets/styles/fonts.css",
    "assets/styles/global.css",
  ],
  i18n: {
    langDir: "locales/",
    strategy: "prefix",
    locales: [
      { code: "zh",
        iso: "zh-TW",
        files: [
          "zh-TW/zh-TW.yaml",
          "zh-TW/nav.yaml"
        ]
      },
      { 
        code: "en",
        iso: "en-US",
        files: [
          "en-US/en-US.yaml",
           "en-US/nav.yaml"
        ]
      },
      {
        code: "tw-tw",
        iso: "nan-TW",
        files: [
          "tw-TW/tw-TW.yaml",
          "tw-TW/nav.yaml"
        ]
      },
    ],
    defaultLocale: "zh",
  },
})