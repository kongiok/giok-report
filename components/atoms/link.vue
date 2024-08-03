<script setup lang="ts">
const props = defineProps<{
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
    <p class="text">
      <slot></slot>
    </p>
    <Icon v-show="icon" class="icon" :name="icon" />
  </nuxt-link-locale>
</template>

<style scoped>
.link {
  @apply inline-flex flex-row gap-2 items-center text-center;
  @apply text-concrete-800 hover:text-olive-drab-400 active:text-olive-drab-600;
  @apply dark:text-concrete-200 dark:hover:text-olive-drab-400 dark:active:text-olive-drab-300;
  @apply active:scale-95 transition-all duration-300;
}
.text {
  @apply text-lg capitalize;
}
.icon {
  @apply text-xl;
}
</style>
