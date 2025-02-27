export enum localeLabel {
  zh = "zh",
  en = "en",
  tw = "tw",
}

export const locales: Record<string, string>[] = [
  {
    label: "Madarin-Taiwan",
    lang: localeLabel.zh,
    language: "zh-TW",
    dir: "auto",
  },
  {
    label: "English-Universal",
    lang: localeLabel.en,
    language: "en",
    dir: "auto",
  },
  {
    label: "Taiwanese-Taiwan",
    lang: localeLabel.tw,
    language: "nan-TW",
    dir: "auto",
  },
];

const defaultFileExtension = "yaml";

export const files: string[] = [
  "users",
  "systems",
  "newsletters",
  "categories",
  "general",
].flatMap((file) => `${file}.${defaultFileExtension}`);
