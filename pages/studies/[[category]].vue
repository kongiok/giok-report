<template>
  <div>
    <h1>Home</h1>
    <p>{{ routeHook.params.category }}Home page content</p>
  </div>
</template>

<script lang="ts" setup>
const routeHook = useRoute();
</script>

<style scoped></style>
