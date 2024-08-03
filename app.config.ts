export default defineAppConfig({
  ui: {
    primary: 'burnt-sienna',
    accent: 'olive-drab',
    gray: 'concrete',
    slideover: {
      background: "bg-concrete-50 dark:bg-concrete-700",
      shadow: "shadow-xl",
      overlay: 'true',
      rounded: 'rounded-xl',
    },
    card: {
      divide: "divide divide-concrete-700 dark:devide-concrete-200",
      background: "bg-concrete-50 dark:bg-concrete-700",
      header:{
        padding: "px-4 py-5 sm:p-6",
      },
      footer: {
        padding: "px-4 py-5 sm:p-6",
      }
    }
  }
})