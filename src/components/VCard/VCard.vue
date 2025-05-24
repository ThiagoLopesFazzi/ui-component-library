<template>
  <Card :pt="ptOptions">
    <template v-if="$slots.header" #header>
      <slot name="header" />
    </template>
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="$slots.subtitle" #subtitle>
      <slot name="subtitle" />
    </template>
    <template #content>
      <slot v-if="$slots.content" name="content" />
      <slot v-else-if="!hasNamedSlots" />
    </template>
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import Card from 'primevue/card';

export interface VCardProps {
  /** Custom PassThrough options for the underlying PrimeVue component */
  pt?: object | null;
}

const props = withDefaults(defineProps<VCardProps>(), {
  pt: null,
});

const slots = useSlots();

const hasNamedSlots = computed(() => {
  return !!(
    slots.header ||
    slots.title ||
    slots.subtitle ||
    slots.content ||
    slots.footer
  );
});

const ptOptions = computed(() => {
  return {
    ...(props.pt || {}),
  };
});
</script>
