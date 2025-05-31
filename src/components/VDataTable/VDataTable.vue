<template>
  <DataTable v-bind="$attrs">
    <slot></slot>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';

// Props for our component
export interface VDataTableProps {
  // You can add any additional props here if needed
}

const props = withDefaults(defineProps<VDataTableProps>(), {
  // Default values if needed
});
</script>
