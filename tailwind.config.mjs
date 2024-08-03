
const extendedColors = {
  'neutral': {
    'fg': 'hsl(var(--color-foreground))',
    'bg': 'hsl(var(--color-background))',
    'border': 'hsl(var(--color-border))',
    'disabled': 'hsl(var(--color-disabled))',
    DEFAULT: 'hsl(var(--color-foreground))',
  },
  'accent': {
    DEFAULT: 'hsl(var(--color-accent))',
    'hover': 'hsl(var(--color-accent-hover))',
    'active': 'hsl(var(--color-accent-active))',
  },
  'error': {
    DEFAULT: 'hsl(var(--color-error))',
    'hover': 'hsl(var(--color-error-hover))',
    'active': 'hsl(var(--color-error-active))',
  },
  'success': {
    DEFAULT: 'hsl(var(--color-success))',
    'hover': 'hsl(var(--color-success-hover))',
    'active': 'hsl(var(--color-success-active))',
  },
  'warning': {
    DEFAULT: 'hsl(var(--color-warning))',
    'hover': 'hsl(var(--color-warning-hover))',
    'active': 'hsl(var(--color-warning-active))',
  },
  'info': {
    DEFAULT: 'hsl(var(--color-info))',
    'hover': 'hsl(var(--color-info-hover))',
    'active': 'hsl(var(--color-info-active))',
  },
  'concrete': {
    '50': 'hsl(var(--color-concrete-50))',
    '100': 'hsl(var(--color-concrete-100))',
    '200': 'hsl(var(--color-concrete-200))',
    '300': 'hsl(var(--color-concrete-300))',
    '400': 'hsl(var(--color-concrete-400))',
    '500': 'hsl(var(--color-concrete-500))',
    '600': 'hsl(var(--color-concrete-600))',
    '700': 'hsl(var(--color-concrete-700))',
    '800': 'hsl(var(--color-concrete-800))',
    '900': 'hsl(var(--color-concrete-900))',
    '950': 'hsl(var(--color-concrete-950))',
    DEFAULT: 'hsl(var(--color-concrete-500))',
  },
  'olive-drab': {
    '50': 'hsl(var(--color-olive-50))',
    '100': 'hsl(var(--color-olive-100))',
    '200': 'hsl(var(--color-olive-200))',
    '300': 'hsl(var(--color-olive-300))',
    '400': 'hsl(var(--color-olive-400))',
    '500': 'hsl(var(--color-olive-500))',
    '600': 'hsl(var(--color-olive-600))',
    '700': 'hsl(var(--color-olive-700))',
    '800': 'hsl(var(--color-olive-800))',
    '900': 'hsl(var(--color-olive-900))',
    '950': 'hsl(var(--color-olive-950))',
    DEFAULT: 'hsl(var(--color-olive-500))',
  },
  'goldenrod': {
    '50': 'hsl(var(--color-goldenrod-50))',
    '100': 'hsl(var(--color-goldenrod-100))',
    '200': 'hsl(var(--color-goldenrod-200))',
    '300': 'hsl(var(--color-goldenrod-300))',
    '400': 'hsl(var(--color-goldenrod-400))',
    '500': 'hsl(var(--color-goldenrod-500))',
    '600': 'hsl(var(--color-goldenrod-600))',
    '700': 'hsl(var(--color-goldenrod-700))',
    '800': 'hsl(var(--color-goldenrod-800))',
    '900': 'hsl(var(--color-goldenrod-900))',
    '950': 'hsl(var(--color-goldenrod-950))',
    DEFAULT: 'hsl(var(--color-goldenrod-500))',
  },
  'burnt-sienna': {
    '50': 'hsl(var(--color-burnt-sienna-50))',
    '100': 'hsl(var(--color-burnt-sienna-100))',
    '200': 'hsl(var(--color-burnt-sienna-200))',
    '300': 'hsl(var(--color-burnt-sienna-300))',
    '400': 'hsl(var(--color-burnt-sienna-400))',
    '500': 'hsl(var(--color-burnt-sienna-500))',
    '600': 'hsl(var(--color-burnt-sienna-600))',
    '700': 'hsl(var(--color-burnt-sienna-700))',
    '800': 'hsl(var(--color-burnt-sienna-800))',
    '900': 'hsl(var(--color-burnt-sienna-900))',
    '950': 'hsl(var(--color-burnt-sienna-950))',
    DEFAULT: 'hsl(var(--color-burnt-sienna-500))',
  },
  'azure-radiance': {
    '50': 'hsl(var(--color-azure-radiance-50))',
    '100': 'hsl(var(--color-azure-radiance-100))',
    '200': 'hsl(var(--color-azure-radiance-200))',
    '300': 'hsl(var(--color-azure-radiance-300))',
    '400': 'hsl(var(--color-azure-radiance-400))',
    '500': 'hsl(var(--color-azure-radiance-500))',
    '600': 'hsl(var(--color-azure-radiance-600))',
    '700': 'hsl(var(--color-azure-radiance-700))',
    '800': 'hsl(var(--color-azure-radiance-800))',
    '900': 'hsl(var(--color-azure-radiance-900))',
    '950': 'hsl(var(--color-azure-radiance-950))',
    DEFAULT: 'hsl(var(--color-azure-radiance-500))',
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
    "MonaSpaceRn",
    "LXGWWenKaiMonoTC",
    "MonaSpaceAr",
    "monospace",
  ],
  handwrite: [],
  text: [
    "GenSekiGothicTW",
    "GenSekiGothicJP",
    "TaipeiSansBeta",
    "sans-serif",
  ],
  title: [
    "MonaSpaceAr",
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
const extendedFrames = {
  slideIn: {
    '0%': { 
      transform: 'translateY(100%)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
}
const extendedAnimations = {
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
      screens: {
        'phone': '360px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      keyframes: extendedFrames,
      animation: extendedAnimations,
    },
  },
  plugins: [],
} 

