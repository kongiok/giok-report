// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],

  routeRules: {
    "/": { prerender: true },
  },
  i18n: {
    strategy: "prefix",
    langDir: "locales/",
    defaultLocale: "zh-TW",
    locales: [
      {
        code: "en-US",
        language: "en-US",
        name: "English",
        files: [
          "en-US/common.json",
          "en-US/nav.json",
          "en-US/error.json",
          "en-US/docs.json",
        ],
      },
      {
        code: "zh-TW",
        language: "zh-TW",
        name: "繁體中文",
        files: [
          "zh-TW/common.json",
          "zh-TW/nav.json",
          "zh-TW/error.json",
          "zh-TW/docs.json",
        ],
      },
      {
        code: "min-TW",
        language: "min-TW",
        name: "台語",
        files: [
          "min-TW/common.json",
          "min-TW/nav.json",
          "min-TW/error.json",
          "min-TW/docs.json",
        ],
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      redirectOn: "root",
    },
  },

  compatibilityDate: "2024-09-19",
});
