<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { Link } from "~/utils/types";
import Slideover from "./slideover.vue";


const { t } = useI18n();
const navItems: Link[] = [
  { 
    title: t("nav.about"),
    url: "/about",
    icon: "mdi:about-circle-outline"
  },
  { 
    title: t("nav.techs"),
    url: "/about",
    icon: "ri:article-line"
  },
  {
    title: t("nav.studies"),
    url: "/studies",
    icon: "mdi:bookshelf"
  },
  {
    title: t("nav.anecdotes"),
    url: "/",
    icon: "mdi:place-outline"
  },
];

const colorMode = useColorMode();
const toggleColorMode = () => {
  colorMode.value = colorMode.value === "light" ? "dark" : "light";
};

const slideover = useSlideover();
const toggleSlideover = () => slideover.isOpen.value ? slideover.close : slideover.open(Slideover);

onMounted(()=>{
  console.log(slideover);
})
</script>

<template>
<header>
  <div class="left">
    <u-button class="trigger sidebar"
      @click="toggleSlideover"
      aria-label="button"
      aria-atomic="true"
    >
      <Icon name="icon-park:hamburger-button" class="icon"/>
    </u-button>
    <u-button class="trigger appearence" 
      @click="toggleColorMode"
      aria-label="button"
      aria-atomic="true"
    >
      <Icon name="ri:sun-line" 
        class="icon"
        :class="{ current : colorMode.value === 'light' }"
        v-if="colorMode.value === 'light' "
        />
      <Icon name="ri:moon-line"
        class="icon"
        :class="{ current : colorMode.value === 'dark' }"
        v-if="colorMode.value === 'dark' "
       />
    </u-button>
  </div>
  <div class="center">
    <atoms-logo />
  </div>
  <div class="right">
    <nav class="nav"
      aria-atomic="true"
      aria-label="navigation"
    >
      <nuxt-link-locale v-for="(item, index) in navItems" 
        :key="index"
        :to="item.url" class="link"
      >
        <Icon v-if="item.icon" :name="item.icon" class="icon"/>
        <p class="text">{{ item.title }}</p>
      </nuxt-link-locale>
    </nav>
  </div>
</header>
</template>

<style scoped>
header {
  @apply sticky top-0 left-0 right-0;
  @apply w-svw max-w-full h-28 z-50 px-3;
  @apply flex items-center justify-center;
  @apply bg-transparent backdrop-blur-sm;
  /* @apply border-b-2 border-neutral-border; */
  @screen tablet {
    @apply h-24 px-8;
  }
  .left, .right, .center {
    @apply flex flex-1;
  }
}
.left {
  @apply justify-start;
}
.center {
  @apply justify-center;
}
.right {
  @apply justify-end;
}

.nav {
  @apply hidden;
  @apply mr-3;
  @screen tablet {
    @apply flex flex-row items-center justify-around;
  }
}
.nav .link {
  @apply overflow-hidden h-12 w-28;
  .text {
    @apply font-serif font-semibold capitalize;
    @apply translate-y-8 opacity-0;
  }
  .icon {
    @apply relative m-0;
    @apply top-1/2 left-1/2 opacity-100;
    @apply transform -translate-y-1/2 -translate-x-1/2;
    @apply transition-all duration-300;
    @apply text-2xl;
  }
  &:hover {
    @apply transform scale-110;
    @apply transition-all duration-300;
  }
  &:active {
    @apply transform scale-95;
    @apply text-goldenrod;
  }
  @screen tablet {
    .text {
      @apply text-sm;
    }
  }
  @screen laptop {
    .text {
      @apply text-lg;
    }
    &:hover {
      .text {
        @apply transition-all duration-300;
        @apply -translate-y-4 opacity-100;
      }
      .icon {
        @apply transition-all duration-300;
        @apply -translate-y-6 opacity-0;
      }
    }
    &:active {
      .text {
        @apply transform scale-95;
        @apply text-goldenrod-500;
      }
    }
  }
}
.trigger {
  @apply bg-transparent shadow-none;
  @apply active:shadow-inner;
  .sidebar {
    @apply flex items-center justify-center;
    @apply p-3;
  }
  .icon {
    @apply text-neutral-fg text-2xl;
    @apply active:text-goldenrod-500;
    @apply transition-colors duration-150;
  }
}
.appearence {
  .icon {
    @apply block;
  }
  .icon:not(.current){
    @apply block;
  }
}
.slideover {
  @apply bg-concrete-100;
}
</style>
