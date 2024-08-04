<script setup lang="ts">
const props = defineProps<{
  hasBg: Boolean;
}>()
</script>

<template>
  <div class="logo" :class="{'bg': hasBg}" role="logo" aria-atomic="true">
    <nuxt-link-locale to="/" class="link">
      <h1 class="text">{{ $t("app.title") }}</h1>
    </nuxt-link-locale>
  </div>
</template>

<style scoped>
.logo {
  @apply max-w-24 grid place-content-center;
  @apply rounded-md active:shadow-inner;
}
.logo.bg{
  @apply shadow-none active:shadow-inner;
  @apply transition-all duration-150;
}
.text {
  @apply inline-block;
  @apply text-2xl font-title font-semibold text-pretty tracking-widest uppercase;
  @apply text-transparent bg-clip-text bg-gradient-to-br;
  @apply from-goldenrod-500 via-burnt-sienna-300 to-goldenrod-600;
}
</style>
