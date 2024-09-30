import {
  localesSet as locales,
  localeDefault as defaultLocale,
  langDir,
} from "./i18n/utils";
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
    locales,
    defaultLocale,
    langDir,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      redirectOn: "root",
    },
  },

  compatibilityDate: "2024-09-19",
});
