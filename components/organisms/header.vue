<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { DropdownItem, Link } from "~/utils/types";
import Slideover from "./slideover.vue";


const colorMode = useColorMode();
const slideover = useSlideover();

const { t } = useI18n();
const switchLocale = useSwitchLocalePath();

const navItems: Link[] = [
  { 
    label: t("header.about"),
    to: "/info/about",
    icon: "mdi:about-circle-outline"
  },
  { 
    label: t("header.techs"),
    to: "/news/techs",
    icon: "ri:article-line"
  },
  {
    label: t("header.studies"),
    to: "/studies",
    icon: "mdi:bookshelf"
  },
  {
    label: t("header.anecdotes"),
    to: "/anecdotes",
    icon: "mdi:place-outline"
  },
];

const locales: DropdownItem[][] = [[
  {
    label: "English",
    to: switchLocale("en"),
  },
  {
    label: "正體中文",
    to: switchLocale("zh"),
  },
  {
    label: "台語",
    to: switchLocale("tw-tw"),
  },
]]; 


const toggleColorMode = () => {
  colorMode.value = colorMode.value === "light" ? "dark" : "light";
};

const toggleSlideover = () => slideover.isOpen.value ? slideover.close : slideover.open(Slideover);


onMounted(()=>{
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
      <Icon name="icon-park:hamburger-button" class="icon" />
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
    <u-dropdown class="locales"
      label="locales"
      :items="locales"
    >
      <u-button 
        class="trigger"
        label="locales"
      >
        <span class="text">{{ $t('header.locales') }}</span>
        <Icon name="ic:baseline-language" class="icon"/>
      </u-button>
      <template #item="{item}">
        <nuxt-link class="link"
          :to="item.to">
          <p>{{ item.label }}</p>
        </nuxt-link>
      </template>
    </u-dropdown>
  </div>
  <div class="center">
    <atoms-logo :has-bg="false" class="logo" />
  </div>
  <div class="right">
    <nav class="nav"
      aria-atomic="true"
      aria-label="navigation"
    >
      <nuxt-link-locale v-for="(item, index) in navItems" 
        :key="index"
        :to="item.to" class="link"
      >
        <Icon v-if="item.icon" :name="item.icon" class="icon"/>
        <p class="text">{{ item.label }}</p>
      </nuxt-link-locale>
    </nav>
  </div>
</header>
</template>

<style scoped>
header {
  @apply sticky top-0 left-0 right-0;
  @apply w-svw max-w-full h-20 z-50 px-2;
  @apply flex items-center justify-center;
  @apply bg-transparent backdrop-blur-sm;
  @apply border-b-2 border-neutral-border;
  @screen tablet {
    @apply h-16 px-8;
  }
  @screen laptop {
    @apply h-20 px-12;
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
  @apply overflow-hidden h-10 w-16;
  @screen laptop {
    @apply w-20;
  }
  .text {
    @apply font-serif font-semibold capitalize;
    @apply translate-y-8 opacity-0;
    @apply text-pretty;
  }
  .icon {
    @apply relative m-1;
    @apply top-1/2 left-1/2 opacity-100;
    @apply transform -translate-x-1/2 -translate-y-1/2;
    @apply text-xl;
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
  @apply m-0;
  @screen tablet {
    @apply m-4;
  }
  @apply bg-transparent shadow-none;
  @apply active:shadow-inner;
  .sidebar {
    @apply flex items-center justify-center;
    @apply p-3;
  }
  .icon {
    @apply text-neutral-fg text-xl;
    @apply active:text-goldenrod-500;
    @apply transition-colors duration-150;
  }
}
.appearence {
  @apply hidden;
  @screen tablet {
    @apply inline-block;
  }
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
.locales {
  .trigger {
    @apply bg-transparent shadow-none;
    @apply active:shadow-inner;
    @apply font-serif font-bold;
    .text {
      @apply hidden;
    }
    @screen tablet {
      @apply inline-block;
    }
    .text, .icon {
      @apply text-concrete-800 dark:text-concrete-200;
      > path {
        @apply stroke-concrete-800 dark:stroke-concrete-200;
      }
    }
  }
}
</style>
