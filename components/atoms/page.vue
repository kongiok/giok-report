<script setup lang="ts">
</script>

<template>
  <UContainer as="div">
    <slot />
  </UContainer>
</template>

<style scoped>
div {
  @apply max-w-full w-svw min-h-dvh;
  @apply grid grid-rows-[auto,1fr,auto] place-content-center;
}

</style>
