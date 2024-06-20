import en from "~/locales/en.json";
import zhTw from "~/locales/zh-tw.json";
import nanTw from "~/locales/nan-tw.json";

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en,
    'zh-tw': zhTw,
    'nan-tw': nanTw,
  },
  defaultLocale: 'zh-tw',
  langDir: 'locales',
}));
