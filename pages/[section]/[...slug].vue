<template>
  <article class="article">
    <ContentRenderer v-if="page" :data="page">
      <section class="heading">
        <h1>{{ page.title }}</h1>
        <h2>{{ page.description }}</h2>
      </section>
      <ContentRendererMarkdown
        tag="section"
        v-if="page"
        :value="page"
      />
    </ContentRenderer>
  </article>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "news-page",
});
const routeHook = useRoute();
const slugParam = computed(() => {
  if (!routeHook.params.slug) {
    throw createError({
      statusCode: 404,
      message: "error.post.notFound",
    });
  }
  return typeof routeHook.params.slug === "string"
    ? routeHook.params.slug
    : routeHook.params.slug.join("/");
});
const queryString = `/${routeHook.params.section}/`;
const { data: page } = await useAsyncData(
  "Current Page",
  () =>
    queryContent(queryString)
      .where({
        slug: {
          $in: slugParam.value,
        },
        isArchived: false,
        _draft: false,
      })
      .findOne(),
);

if (!page) {
  throw createError({
    statusCode: 404,
    message: "error.post.notFound",
  });
}
onMounted(() => {
  console.log(page.value);
});
</script>

<style scoped lang="css"></style>
