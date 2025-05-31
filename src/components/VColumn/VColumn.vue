<template>
  <Column v-bind="$attrs">
    <template #sorticon="slotProps">
      <i :class="getSortIconClass(slotProps)" :style="getSortIconStyle(slotProps)"></i>
    </template>
    <slot></slot>
  </Column>
</template>

<script setup lang="ts">
import Column from 'primevue/column';

// Interface for the sort icon slot props
export interface SortIconSlotProps {
  sorted?: boolean; 
  sortOrder?: number;
}

// Props for our component
export interface VColumnProps {
  // You can add any additional props here if needed
}

const props = withDefaults(defineProps<VColumnProps>(), {
  // Default values if needed
});

// Function to determine the sort icon class based on sort status
const getSortIconClass = (slotProps: SortIconSlotProps) => {
  // If column is sorted
  if (slotProps.sorted) {
    // Show up arrow when ascending (sortOrder === 1)
    if (slotProps.sortOrder === 1) {
      return 'pi pi-chevron-up';
    }
    // Show down arrow when descending (sortOrder === -1)
    else {
      return 'pi pi-chevron-down';
    }
  }
  // Default state (not sorted)
  return 'pi pi-chevron-down';
};

// Function to apply color styles to active sort column icons
const getSortIconStyle = (slotProps: SortIconSlotProps) => {
  if (slotProps.sorted) {
    return { color: '#cf8a31' };
  }
  return {};
};
</script>
