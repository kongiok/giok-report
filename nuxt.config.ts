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
    "@nuxtjs/color-mode",
    "@nuxt/icon",
  ],

  routeRules: {
    "/zh-TW": { prerender: true },
    "/min-TW": { prerender: true },
    "/en-US": { prerender: true },
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
  content: {
    defaultLocale,
    locales: locales.map((locale) => locale.language),
  },
  tailwindcss: {
    cssPath: "~/assets/styles/tailwind.css",
  },
  compatibilityDate: "2024-09-19",
});