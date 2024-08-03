<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <organisms-header />
    <slot />
    <organisms-footer />
  </div>
</template>

<style scoped>
.wrapper {
  @apply min-h-dvh max-w-full;
  @apply grid grid-rows-[auto,1fr,auto];
  @apply bg-concrete-100 text-concrete-900;
}
.dark {
  .wrapper {
    @apply bg-concrete-900 text-concrete-100;
  }
}

</style>
