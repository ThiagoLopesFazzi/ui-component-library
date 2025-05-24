<template>
  <Dialog
    :visible="props.visible"
    @update:visible="handleUpdateVisible"
    @hide="handleDialogHide"
    :header="props.title"
    :modal="props.blocking"
    :dismissableMask="props.closeOnOutsideClick"
    :closeOnEscape="props.closeOnEscape"
    :baseZIndex="props.zIndex"
    :appendTo="props.teleportTo"
    :draggable="false"
    :pt="passThroughOptions"
    :ptOptions="{ mergeSections: true, mergeProps: true }"
    :class="containerClass"
  >
    <template #header>
      <slot name="header">
        <h2 :id="titleId" class="v-modal__title">{{ props.title }}</h2>
      </slot>
    </template>

    <div
      v-if="props.description"
      :id="descriptionId"
      class="v-modal__description"
    >
      {{ props.description }}
    </div>
    <slot>
      <div v-if="props.content">{{ props.content }}</div>
    </slot>

    <template #footer>
      <slot v-if="slots.footer" name="footer"></slot>
      <VButton
        v-if="!slots.footer"
        class="v-modal__cancel-button"
        label="Cancel"
        @click="handleCancel"
        severity="secondary"
      />
    </template>
    <template v-if="slots.closeicon" #closeicon>
      <slot name="closeicon"></slot>
    </template>
    <template v-if="slots.headericons" #headericons>
      <slot name="headericons"></slot>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import Dialog from 'primevue/dialog';
import VButton from '@/components/VButton/VButton.vue'; // Import VButton

interface VModalProps {
  visible?: boolean;
  title?: string;
  description?: string | null;
  content?: string | null;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xl';
  blocking?: boolean;
  zIndex?: number;
  teleportTo?: string;
}

const props = withDefaults(defineProps<VModalProps>(), {
  visible: false,
  title: undefined, // PrimeVue Dialog's header prop can be undefined, so not strictly required if slot is used
  description: null,
  content: null,
  closeOnOutsideClick: true,
  closeOnEscape: true,
  size: 'medium',
  blocking: false, // Corresponds to Dialog's `modal` prop
  zIndex: 1000,
  teleportTo: 'body', // Corresponds to Dialog's `appendTo` prop
});

const emit = defineEmits(['update:visible', 'before-close', 'after-close']);
const slots = useSlots();

// Unique IDs for ARIA attributes if needed, though PrimeVue might handle some internally
const modalIdSuffix = Math.random().toString(36).substring(2, 9);
const titleId = `v-modal-title-${modalIdSuffix}`;
const descriptionId = `v-modal-description-${modalIdSuffix}`;

const handleUpdateVisible = (value: boolean) => {
  if (!value) {
    const event = new Event('close', { cancelable: true });
    emit('before-close', event);
    if (event.defaultPrevented) {
      return;
    }
  }
  emit('update:visible', value);
  // after-close is now handled by handleDialogHide
};

const handleDialogHide = () => {
  emit('after-close');
};

const handleCancel = () => {
  const event = new Event('close', { cancelable: true });
  emit('before-close', event);
  if (!event.defaultPrevented) {
    emit('update:visible', false);
  }
};

// Pass-through options for styling PrimeVue Dialog internal elements
const passThroughOptions = computed(() => ({
  root: {
    class: [
      'v-modal__dialog', // Main dialog panel
      `v-modal__dialog--${props.size}`,
      { 'v-modal__dialog--responsive': true }, // Assuming responsive is always true now
    ],
    // Add aria-describedby if description is present and slot is not overriding content
    // PrimeVue Dialog itself will set aria-labelledby to its header section.
    // If our description div is inside the main content slot, this should be fine.
    // For more direct control, if description is always outside the main slot:
    'aria-describedby': props.description ? descriptionId : undefined,
  },
  mask: {
    class: [
      'v-modal__overlay',
      { 'v-modal__overlay--blocking': props.blocking },
    ],
  },
  header: {
    class: 'v-modal__header',
  },
  title: {
    class: 'v-modal__title',
    // id: titleId, // PrimeVue Dialog will generate an ID for its title element if header prop is used.
    // If header slot is used, our h2 has the ID.
  },
  closeButton: {
    class: 'v-modal__close-icon',
  },
  closeButtonIcon: {
    class: 'pi pi-times', // Ensure PrimeIcon is used if not default
  },
  content: {
    class: 'v-modal__content',
    // If description is inside the content slot and needs to be described by.
    // This is tricky as aria-describedby on content itself is not standard.
    // It should be on the role="dialog" element (root).
  },
  footer: {
    class: 'v-modal__footer',
  },
}));

// The main class for the Dialog component itself, if needed for external styling or identification
const containerClass = computed(() => [
  'v-modal-container', // Custom container class
  // any other classes based on props if necessary
]);
</script>
