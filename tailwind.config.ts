import type { Config } from "tailwindcss";
import type { PaletteConfig } from "./assets/styles/types";
import {
  eerieColours,
  gingerColours,
  icterineColours,
  siennaColours,
  abyssColours,
  caribbeanColours,
  nightBlueColours,
  violetColours,
  taupeColours,
} from "./assets/styles/palettes";

const colors: PaletteConfig = {
  neutral: eerieColours,
  taupe: taupeColours,
  ginger: gingerColours,
  icterine: icterineColours,
  sienna: siennaColours,
  caribbean: caribbeanColours,
  abyss: abyssColours,
  night: nightBlueColours,
  violet: violetColours,
};
const tailwindConfigs: Partial<Config> = {
  content: [
    "./content/**/*/*.{md,mdx,vue,tsx}",
    "./layouts/**/*.{vue,tsx}",
    "./components/**/*.{vue.tsx}",
    "./pages/**/*.{vue,tsx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
};

export default tailwindConfigs;
