import tailwindcss from "@tailwindcss/vite";
import mkcert from "vite-plugin-mkcert";
import {
  locales as i18nlocales,
  files as i18nLocalesFiles,
  localeLabel,
} from "./i18n/setup";
import type { LocaleObject } from "@nuxtjs/i18n";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss(), mkcert()],
  },

  modules: ["@nuxt/icon", "@nuxt/content", "@nuxt/eslint", "@nuxtjs/i18n"],
  css: ["~/assets/styles/main.css"],
  app: {
    rootId: "__giok-po__",
    rootTag: "body",
  },
  devServer: {
    https: true,
  },
  eslint: {
    config: {
      stylistic: true,
      standalone: true,
    },
  },
  i18n: {
    locales: i18nlocales.map((locale) => ({
      dir: locale.dir,
      code: locale.lang,
      language: locale.language,
      files: i18nLocalesFiles.flatMap((file) => `${locale.lang}/${file}`),
    })) as LocaleObject[],
    defaultLocale: localeLabel.zh,
    strategy: "prefix",
    rootRedirect: {
      statusCode: 301,
      path: `/`,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "giok_po_i18n_redirected",
      alwaysRedirect: true,
    },
  },
});
