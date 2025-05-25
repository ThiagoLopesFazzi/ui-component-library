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
    :pt="currentPassThroughOptions"
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
import VButton from '@/components/VButton/VButton.vue';

export interface VModalProps {
  visible?: boolean;
  title?: string;
  description?: string | null;
  content?: string | null;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xl'; // Size prop remains, but styling relies on theme/PT
  blocking?: boolean;
  zIndex?: number;
  teleportTo?: string;
  pt?: object | null; // Added pt to props
}

const props = withDefaults(defineProps<VModalProps>(), {
  visible: false,
  title: undefined,
  description: null,
  content: null,
  closeOnOutsideClick: true,
  closeOnEscape: true,
  size: 'medium',
  blocking: false,
  zIndex: 1000,
  teleportTo: 'body',
  pt: null, // Added pt to defaults
});

const emit = defineEmits(['update:visible', 'before-close', 'after-close']);
const slots = useSlots();

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

// Simplified PassThrough options
const currentPassThroughOptions = computed(() => {
  const ptConfig = { ...props.pt }; // Start with user-provided PT for VModal

  // Add VModal specific structural/accessibility PTs that are not about visual styling
  if (props.description) {
    ptConfig.root = {
      ...(ptConfig.root || {}),
      'aria-describedby': descriptionId,
    };
  }
  // Note: VModal's 'size' prop styling is now expected to be handled by the theme
  // or by custom 'pt' prop passed to VModal. The previous classes like 'v-modal__dialog--small'
  // are no longer applied by VModal's internal PT.

  return ptConfig;
});

const containerClass = computed(() => ['v-modal-container']);
</script>
