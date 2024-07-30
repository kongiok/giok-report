<script setup lang="ts"></script>

<template>
  <atoms-page class="atoms-page">
    <organisms-header />
    <slot />
    <organisms-footer />
  </atoms-page>
</template>

<style scoped>
.atoms-page {
  @apply bg-concrete-100 dark:bg-concrete-700;
}
</style>
