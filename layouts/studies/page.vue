<script setup lang="ts"></script>

<template>
  <main>
    <article>
      <section class="heading">
        <slot name="heading"></slot>
      </section>
      <section class="toc">
        <slot name="toc"></slot>
      </section>
      <section class="content">
        <slot />
      </section>
    </article>
  </main>
</template>

<style scoped>
main {
}
</style>
