<template>
  <main
    class="error-bg w-dvw h-dvh content-center dark:bg-neutral-800"
  >
    <!-- Error Section -->
    <section
      class="w-11/12 h-4/5 m-auto p-10 flex flex-col md:flex-row justify-evenly md:justify-center md:gap-20 items-center bg-neutral-300/30 backdrop-blur-md shadow-lg rounded-2xl"
    >
      <!-- Icon Side -->
      <div
        class="flex-1 md:flex-initial flex aspect-square rounded-full p-6 justify-center items-center gap-3 text-8xl text-mono text-secondary-50 select-none font-mono bg-secondary-400"
      >
        <span>:</span>
        <span>(</span>
      </div>
      <!-- Text -->
      <div
        class="flex-3/4 md:flex-initial flex flex-col justify-center items-center gap-8 select-none"
      >
        <!-- Code -->
        <div
          class="flex flex-col justify-center items-center text-8xl font-mono font-bold text-neutral-950"
        >
          <span>{{ props.error?.statusCode }}</span>
        </div>
        <!-- Description -->
        <div
          class="flex flex-col justify-center items-center gap-4 select-none text-neutral-600 text-lg font-text"
        >
          <p v-if="props.error?.statusCode === 404">
            {{
              t(`error.${props.error?.statusCode}`, {
                page: route.path,
              })
            }}
          </p>
          <p v-else-if="props.error?.statusCode">
            {{ t(`error.${props.error?.statusCode}`) }}
          </p>
          <p v-else-if="props.error?.statusMessage">
            {{ t(`error.${props.error?.statusMessage}`) }}
          </p>
          <p v-else>
            {{ t(`error.520`) }}
          </p>
        </div>
        <div class="flex flex-row justify-center items-center">
          <nuxt-link-locale
            to="/"
            class="font-semibold text-lg px-5 py-3 rounded-lg border-2 border-neutral-600 bg-neutral-100 hover:bg-neutral-100/75 active:bg-neutral-200 active:shadow-inner active:text-primary-900 font-service"
            >{{ t("areas.home") }}</nuxt-link-locale
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";
const { t } = useI18n();
const route = useRoute();
const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<style lang="css" scoped>
.error-bg {
  background: linear-gradient(
    24deg,
    rgba(254, 225, 204, 0.38),
    rgba(243, 184, 191, 0.35)
  );
  -webkit-background: linear-gradient(
    24deg,
    rgba(254, 225, 204, 0.38),
    rgba(243, 184, 191, 0.35)
  );
  -moz-background: linear-gradient(
    24deg,
    rgba(254, 225, 204, 0.38),
    rgba(243, 184, 191, 0.35)
  );
}
</style>
