<template>
  <main class="size-screen content-center bg-neutral-100 dark:bg-neutral-800">
    <h1 class="m-auto w-fit text-3xl text-neutral-900 dark:text-neutral-200">
      {{ t("brand.title") }}
    </h1>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
