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
    :pt="props.pt"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

export interface VButtonProps {
  // Added export
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

// Default PassThrough options for VButton are removed as styling will come from the theme.
// const vButtonDefaultPt = { ... };

// Merge logic is removed as we directly pass props.pt.
// const mergedPt = computed(() => { ... });
</script>
