<script setup lang="ts">
</script>

<template>
  <div class="logo" role="logo" aria-atomic="true">
    <nuxt-link-locale to="/" class="link">
      <h1 class="text">{{ $t("app.title") }}</h1>
    </nuxt-link-locale>
  </div>
</template>

<style scoped>
.logo {
  @apply w-32 h-16 grid place-content-center;
  @apply rounded-md;
  @apply shadow hover:shadow-md active:shadow-inner;
  @apply transition-all duration-150;
}
.text {
  @apply inline-block;
  @apply text-3xl font-title font-semibold text-pretty;
  @apply text-transparent bg-clip-text bg-gradient-to-br;
  @apply from-goldenrod-400 via-goldenrod-300 to-burnt-sienna-700
}
</style>
