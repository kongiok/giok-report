<template>
<section>
  <h1 class="text-2xl font-title text-bold text-concrete-700">
  {{ $t("hello-world") }}
  </h1>
  <p class="text-xl font-title text-bold text-concrete-700 dark:text-concrete-200">
  {{ $colorMode.value }}
  </p>
</section>
</template>


<style lang="css" scoped>
section {
  @apply bg-concrete-100 dark:bg-concrete-900;
  @apply p-4;
  @apply text-center;
  @apply grid place-items-center;
}
</style>