<template lang="html">
  <main class="min-h-screen w-screen content-center bg-neutral-100">
    <section class="container m-auto content-center">
      <h1 class="m-auto w-fit text-2xl">{{ route.params.area }}</h1>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { contentAreaEnum } from "~/utils/types/content";
const route = useRoute();

const isValidArea = contentAreaEnum.safeParse(route.params.area).success;
if (!isValidArea) {
  throw createError({
    statusCode: 404,
    statusMessage: `Invalid content area: ${route.params.area}`,
  });
}
</script>

<style lang="css" scoped></style>
