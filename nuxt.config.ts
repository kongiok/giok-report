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
    langDir: "locales/",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English",
        files: ["en-US/common.json", "en-US/nav.json"],
      },
      {
        code: "zh-TW",
        iso: "zh-TW",
        name: "繁體中文",
        files: ["zh-TW/common.json", "zh-TW/nav.json"],
      },
      {
        code: "min-TW",
        iso: "min-TW",
        name: "台語",
        files: ["min-TW/common.json", "min-TW/nav.json"],
      },
    ],
    defaultLocale: "zh-TW",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      redirectOn: "root",
    },
  },

  compatibilityDate: "2024-09-19",
});
