import i18nSettings from "./i18n.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/content"
  ],
  i18n: {
    langDir: "locales/",
    strategy: "prefix",
    locales: [
      { code: "zh-tw", iso: "zh-TW", file: "zh-TW.yaml" },
      { code: "en", iso: "en-US", file: "en-US.yaml" },
      { code: "tw-tw", iso: "nan-TW", file: "tw-TW.yaml" },
    ],
    defaultLocale: "zh-tw",
  },
})