<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
const headData = reactive({
  title: route.meta.title
    ? t(route.meta.title as string)
    : t("site.seo.title"),
  description: route.meta.description
    ? t(route.meta.description as string)
    : t("site.seo.description"),
});
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ headData.title }}</Title>
      <Meta
        name="description"
        :content="headData.description"
      />
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta
          :id="meta.id"
          :property="meta.property"
          :content="meta.content"
        />
      </template>
    </Head>
    <Body>
      <slot />
    </Body>
  </Html>
</template>

<style scoped></style>
