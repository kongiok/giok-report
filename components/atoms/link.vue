<script setup lang="ts">
const props = defineProps<{
  title: string;
  to: string;
  descrip?: string;
  icon?:string;
}>();
</script>

<template>
  <nuxt-link-locale
  :to="to"
  :aria-details="descrip"
  class="link"
  >
    <p class="text">{{ title }}</p>
    <Icon v-show="icon" class="icon" :name="icon" />
  </nuxt-link-locale>
</template>

<style scoped>
.link {
  @apply inline-flex flex-row gap-2 items-center text-center;
  @apply text-concrete-800 active:text-olive-drab-600;
}
.text {
  @apply text-lg capitalize;
}
.icon {
  @apply text-xl;
}
</style>
