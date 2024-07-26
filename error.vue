<template>
  <UContainer as="main">
    <header>
      <h1 v-if="isOtherError">ERROR</h1>
      <h1 v-else>{{ error.statusCode }}</h1>
    </header>
    <section>
      <p v-if="hasMessage">{{ error.message }}</p>
      <p v-else-if="isNotFound">Page not found</p>
      <p v-else-if="isServerError">Internal Server Error</p>
      <p v-else-if="isOtherError">Unknown Error</p>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
import type {NuxtError} from '#app'

const props = defineProps<{error: NuxtError}>()
const { error } = toRefs(props)

const hasMessage = error.value.message
const isNotFound = error.value.statusCode === 404
const isServerError = error.value.statusCode === 500
const isOtherError = !isNotFound && !isServerError
</script>

<style scoped lang="css">
main {
  @apply min-h-dvh w-dvw;
  @apply content-center m-auto;
  @apply grid grid-cols-1 gap-4;
}

header {
  @apply mb-24;
  @apply text-center;
  > h1 {
    @apply text-9xl font-bold font-title drop-shadow-md;
  }
}

section {
  @apply m-5;
  @apply text-center;
  > p {
    @apply text-2xl font-subtitle;
  }
}
</style>