<script setup lang="ts">
import type { DropdownItem } from '~/utils/types';

defineProps<{
  label?: string;
  to?: string;
  click?: () => void;
  icon?: string;
  items?: DropdownItem[];
}>();

const isDropdownExpanded = useState('dropdown', () => false);
</script>

<template>
  <div class="dropdown">
    <button class="trigger"
      @click="isDropdownExpanded = !isDropdownExpanded"
      aria-label="button"
      :aria-expanded="isDropdownExpanded"
      aria-haspopup="true"
    >
      {{ label ? label : 'Click Me' }}
    </button>
    <ul class="menu"
      role="menu"
      v-if="isDropdownExpanded"
    >
      <li v-for="item in items" :key="item.label"
        class="item"
      >
        <a class="link" 
          v-if="item.to"
          :href="item.to"
          role="menuitem"
        >
          <p>{{ item.label }}</p>
          <Icon v-if="item.icon" name="item.icon" />
        </a>
        <button class="btn" 
          v-if="item.click" 
          @click="item.click" 
          role="menuitem"
        >
          <p>{{ item.label }}</p>
          <Icon v-if="item.icon" name="item.icon" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  @apply relative inline-flex;
}
.trigger {
  @apply m-auto p-2 content-center;
  @apply cursor-pointer;
  @apply text-concrete-800 text-lg;
  @apply font-serif font-bold;
}

</style>
