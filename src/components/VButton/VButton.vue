<template>
  <Button
    :label="props.label"
    :icon="props.icon"
    :iconPos="props.iconPos"
    :severity="props.severity"
    :outlined="props.outlined"
    :raised="props.raised"
    :rounded="props.rounded"
    :text="props.text"
    :size="props.size"
    :loading="props.loading"
    :loadingIcon="props.loadingIcon"
    :badge="props.badge"
    :badgeClass="props.badgeClass"
    :pt="mergedPt"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { computed, useSlots } from 'vue';

interface VButtonProps {
  /** Button label */
  label?: string | null;
  /** Button icon */
  icon?: string | null;
  /** Position of the icon */
  iconPos?: 'left' | 'right' | 'top' | 'bottom';
  /** Button severity level */
  severity?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'help'
    | null;
  /** Whether the button is outlined */
  outlined?: boolean;
  /** Whether the button has a raised effect */
  raised?: boolean;
  /** Whether the button has rounded corners */
  rounded?: boolean;
  /** Whether the button has text styling */
  text?: boolean;
  /** Button size */
  size?: 'small' | 'large' | null;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Loading icon */
  loadingIcon?: string;
  /** Badge value */
  badge?: string | null;
  /** Badge CSS class */
  badgeClass?: string | null;
  /** Custom PassThrough options for the underlying PrimeVue component */
  pt?: object | null;
}

const props = withDefaults(defineProps<VButtonProps>(), {
  label: null,
  icon: null,
  iconPos: 'left',
  severity: null,
  outlined: false,
  raised: false,
  rounded: false,
  text: false,
  size: null,
  loading: false,
  loadingIcon: 'pi pi-spinner pi-spin',
  badge: null,
  badgeClass: null,
  pt: null,
});

const emit = defineEmits(['click']);

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};

// Default PassThrough options for VButton to set a base font size and border radius
const vButtonDefaultPt = {
  root: {
    class: 'v-button-default-root', // Added default class
    style: {
      fontSize: '14px',
      borderRadius: '6px', // Added border-radius
    },
  },
};

// Merge VButton's default PT with user-provided PT
const mergedPt = computed(() => {
  const userPt = props.pt || {};
  const result = {}; // Initialize an empty object for the merged PT

  // Get all unique section keys from both default and user PT objects
  const allSectionKeys = new Set([
    ...Object.keys(vButtonDefaultPt),
    ...Object.keys(userPt),
  ]);

  for (const sectionKey of allSectionKeys) {
    const defaultSection = vButtonDefaultPt[sectionKey] || {};
    const userSection = userPt[sectionKey] || {};

    // Merge attributes from default and user sections (user's take precedence)
    result[sectionKey] = { ...defaultSection, ...userSection };

    // Deep merge 'style' objects specifically
    const defaultStyle = defaultSection.style || {};
    const userStyle = userSection.style || {};
    // User's styles should overwrite default styles for the same property
    result[sectionKey].style = { ...defaultStyle, ...userStyle };

    // If user explicitly provides a class, it takes precedence over default.
    // Otherwise, default class is used if present.
    if (userSection.hasOwnProperty('class')) {
      result[sectionKey].class = userSection.class;
    } else if (defaultSection.hasOwnProperty('class')) {
      result[sectionKey].class = defaultSection.class;
    } else {
      // If neither defines a class, remove it to avoid empty class attribute
      delete result[sectionKey].class;
    }

    // Clean up empty style or class objects
    if (
      result[sectionKey].style &&
      Object.keys(result[sectionKey].style).length === 0
    ) {
      delete result[sectionKey].style;
    }
    if (result[sectionKey].class === undefined) {
      // Check for undefined specifically if deleted
      delete result[sectionKey].class;
    }

    // If the section itself becomes empty after merging, remove it
    if (Object.keys(result[sectionKey]).length === 0) {
      delete result[sectionKey];
    }
  }
  return result;
});

// If VButton needs its own default PT options, they can be defined here and merged with props.pt
// For example:
// const componentPtOptions = computed(() => {
//   const base = {
//     root: { class: 'v-button-custom-root' } // Your VButton specific base class
//   };
//   return { ...base, ...props.pt }; // Merge with user-provided PT
// });
// Then bind :pt="componentPtOptions" in the template.
// For now, we are directly passing props.pt.
</script>
