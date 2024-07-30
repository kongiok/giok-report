<template>
  <main>
    <h1>{{ $t("news") }}</h1>
    <h1>{{ slug }}</h1>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from '#app';

const router = useRoute();
const { slug } = router.params;

definePageMeta({
  layout: "news",
})

</script>

<style scoped lang="css">
</style>