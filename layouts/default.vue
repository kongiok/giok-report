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
  @apply min-h-dvh max-w-full bg-concrete-100;
  @apply grid grid-rows-[auto,1fr,auto];
  @apply dark:bg-concrete-900;
}

</style>
