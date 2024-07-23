
const extendedColors = {
  'concrete': {
    '50': 'hsl(0, 0%, 97%)',
    '100': 'hsl(0, 0%, 95%)',
    '200': 'hsl(0, 0%, 86%)',
    '300': 'hsl(0, 0%, 74%)',
    '400': 'hsl(0, 0%, 60%)',
    '500': 'hsl(0, 0%, 49%)',
    '600': 'hsl(0, 0%, 40%)',
    '700': 'hsl(0, 0%, 32%)',
    '800': 'hsl(0, 0%, 27%)',
    '900': 'hsl(0, 0%, 24%)',
    '950': 'hsl(0, 0%, 16%)',
  },
  'olive-drab': {
    '50': 'hsl(78, 52%, 95%)',
    '100': 'hsl(81, 53%, 89%)',
    '200': 'hsl(80, 50%, 80%)',
    '300': 'hsl(81, 49%, 67%)',
    '400': 'hsl(82, 44%, 55%)',
    '500': 'hsl(83, 46%, 44%)',
    '600': 'hsl(84, 49%, 37%)',
    '700': 'hsl(85, 45%, 27%)',
    '800': 'hsl(85, 40%, 23%)',
    '900': 'hsl(88, 36%, 20%)',
    '950': 'hsl(89, 45%, 10%)',
  },
  'goldenrod': {
    '50': 'hsl(47, 90%, 96%)',
    '100': 'hsl(47, 82%, 89%)',
    '200': 'hsl(47, 83%, 77%)',
    '300': 'hsl(45, 84%, 68%)',
    '400': 'hsl(42, 84%, 56%)',
    '500': 'hsl(37, 80%, 50%)',
    '600': 'hsl(31, 82%, 44%)',
    '700': 'hsl(25, 79%, 37%)',
    '800': 'hsl(22, 71%, 31%)',
    '900': 'hsl(20, 67%, 26%)',
    '950': 'hsl(20, 81%, 14%)',
  },
  'burnt-sienna': {
    '50': 'hsl(23, 89%, 96%)',
    '100': 'hsl(24, 90%, 92%)',
    '200': 'hsl(21, 88%, 83%)',
    '300': 'hsl(20, 89%, 72%)',
    '400': 'hsl(16, 87%, 61%)',
    '500': 'hsl(13, 86%, 53%)',
    '600': 'hsl(9, 82%, 48%)',
    '700': 'hsl(7, 80%, 40%)',
    '800': 'hsl(4, 72%, 34%)',
    '900': 'hsl(4, 68%, 28%)',
    '950': 'hsl(2, 73%, 15%)',
  },
}
const extendedFonts = {
  sans: [
    "GenSekiGothicTW",
    "GenSekiGothicJP",
    "TaipeiSansTCBeta",
    "sans-serif",
  ],
  serif: [
    "iansui",
    "LXGWWenKaiTC",
    "GenWanMinTW",
    "GenWanMinJP",
    "serif",
  ],
  mono: [
    "MonaspiceRnNerdFontPropo",
    "LXGWWenKaiMonoTC",
    "monospace",
  ],
  handwrite: [],
  text: [
    "GenSekiGothicTW",
    "GenSekiGothicJP",
    "TaipeiSansTCBeta",
    "sans-serif",
  ],
  title: [
    "GenWanMinTW",
    "GenWanMinJP",
    "iansui",
    "LXGWWenKaiTC",
    "serif",
  ],
  subtitle: [
    "iansui",
    "LXGWWenKaiTC",
    "GenWanMinTW",
    "GenWanMinJP",
    "serif",
  ],
}

export default {
  content: [
    "~/layouts/**/*.vue",
    "~/pages/**/*.vue",
  ],
  theme: {
    extend: {
      colors: extendedColors,
      fontFamily: extendedFonts,
    },
  },
  plugins: [],
} 

