<template>
  <main
    class="size-screen content-center bg-neutral-200 dark:bg-neutral-800"
  >
    <section class="hero m-auto w-[80%] h-44 content-center">
      <h1
        class="m-auto text-center w-fit text-3xl text-neutral-900 dark:text-neutral-200"
      >
        {{ t("brand.title") }}
      </h1>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped lang="css">
.hero {
  background-image: var(--gradient-primary-accent-200);
  background-size: cover;
  background-position: center;
}
</style>
