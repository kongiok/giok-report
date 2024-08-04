<script setup lang="ts">
const {isOpen:isSlideoverOpen, close: closeSlideover} = useSlideover();
</script>

<template>
  <u-slideover class="slideover"
    v-model="isSlideoverOpen"
    :side="'left'"
    :ui="{
      overlay: {
        base: 'fixed inset-0 transition-opacity',
        background: 'bg-concrete-900 opacity-75 dark:bg-concrete-800',
        transition: {
          enter: 'ease-in-out duration-200',
          enterFrom: 'opacity-0',
          enterTo: 'opacity-100',
          leave: 'ease-in-out duration-600',
          leaveFrom: 'opacity-100',
          leaveTo: 'opacity-0',
        },
      },
      translate: {
        base: 'translate-x-0',
        left: '-translate-x-full rtl:translate-x-full',
        right: 'translate-x-full rtl:-translate-x-full',
        top: '-translate-y-full',
        bottom: 'translate-y-full',
      },
      transition: {
        enter: 'transform transition ease-in-out duration-300',
        leave: 'transform transition ease-in-out duration-200',
      },
    }"
  >
  <u-card
    class="container"
    aria-atomic="true"
    aria-label="slideover"
    as="section"
    :ui="{
      body: {base: 'flex-1 flex flex-col'},
      header: {base: 'mb-auto'},
      footer: {base: 'mt-auto mb-4'},
      base: 'h-full flex flex-col m-auto overflow-auto',
      }"
  >
    <template #header>
      <header class="header"
        aria-label="header"
        aria-details="header of slideover"
      >
        <div class="left">
          <atoms-logo :has-bg="false" />
        </div>
        <div class="right">
          <button type="button" @click="closeSlideover" class="btn">
            <Icon name="mdi:close-box" class="icon"/>
          </button>
        </div>
      </header>
    </template>
    <nav class="main"
      aria-label="navigation"
      aria-details="Navigation of Site"
    >
      <h1 class="heading">
        {{ $t('slideover.categories') }}
      </h1>
      <div class="part">
        <atoms-link
          to="/studies"
          class="link"
          icon="ri:article-line"
        >
          {{ $t('slideover.studies') }}
        </atoms-link>
        <atoms-link
          to="/news/techs/"
          class="link"
          icon="streamline:ai-chip-spark"
        >
          {{ $t('slideover.techs') }}
        </atoms-link>
        <atoms-link
          to="/news/politics/"
          class="link"
          icon="streamline:politics-speech"
        >
          {{ $t('slideover.politics') }}
        </atoms-link>
      </div>
      <atoms-divider />
      <h1 class="heading">{{ $t('slideover.recommends') }}</h1>
      <div class="part">
        <atoms-link
          to="/site/google"
          target="_parent"
          class="link"
          icon="tabler:external-link"
        >
          {{ $t('slideover.sites.kongiok') }}
        </atoms-link>
      </div>
    </nav>
    <template #footer>
    <footer class="footer"
      aria-label="footer"
      aria-details="footer of slideover"
    >
      <atoms-link 
        to="/info/contact"
        icon="mdi:contact"
      >
      {{ $t('slideover.services') }}
      </atoms-link>
      <atoms-link
        to="/info/updates"
        icon="ic:baseline-update"
      >
      {{ $t('slideover.updates') }}
      </atoms-link>
    </footer>
    </template>
  </u-card>
  </u-slideover>
</template>

<style scoped>

.header {
  @apply h-12;
  @apply flex flex-row justify-between items-center;
}
.left, .right {
  @apply flex-1 flex;
}
.left {
  @apply justify-start;
}
.right {
  @apply justify-end;
  .btn {
    @apply p-3 rounded-md;
    @apply active:shadow-inner;
  }
  .icon {
    @apply text-3xl;
    @apply text-concrete-800 dark:text-concrete-200;
    @apply hover:text-concrete-900 dark:hover:text-concrete-100;
  }
}
.main {
  @apply flex flex-1 flex-col;
  @apply justify-center items-center;

  .part {
    @apply flex flex-1 flex-col w-full;
    @apply justify-start items-center;
  }
  .link {
    @apply my-2;
  }
}
.heading {
  @apply my-4 text-xl font-serif font-bold;
  @apply self-center;
}

.footer {
  @apply flex flex-row justify-between;
}

</style>
