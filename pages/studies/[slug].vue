<script setup lang="ts">
import { useRoute } from '#app';

const router = useRoute();
const { slug } = router.params;

definePageMeta({
  layout: "news",
})
</script>

<template>
  <div>
    <h1>{{ slug }}</h1>
  </div>
</template>

<style scoped>
</style>
