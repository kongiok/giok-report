<template>
  <slot />
</template>

<script lang="ts" setup>
useHead({
  meta: [
    {
      name: "theme-color",
      content: "oklch(81.7% 0.077 68)",
    },
  ],
});
</script>
