<script setup lang="ts"></script>

<template>
  <header>
    <!-- Logo -->
    <div class="logo">
      <NuxtLink to="/" class="link">
        {{$t("app_name")}}
      </NuxtLink>
    </div>
    <!-- Categories -->
  </header>
</template>

<style scoped>
header {
  @apply sticky top-0 left-0 right-0;
  @apply w-svw max-w-full h-14;
  @apply flex items-center justify-around;
}
.link {
  @apply text-xl font-title font-bold text-concrete-700 dark:text-concrete-200;
}
.logo {
  @apply font-title font-extrabold text-2xl;
}
</style>
