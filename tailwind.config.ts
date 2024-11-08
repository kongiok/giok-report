import type { Config } from "tailwindcss";
import { palettes as colors } from "./assets/styles/loh-pit/palettes";

export default <Partial<Config>>{
  content: [
    "./app.vue",
    "./componenets/**/*.{vue,tsx}",
    "./layouts/**/*.{vue,tsx}",
    "./pages/**/*.{vue,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
};
