import { App, Plugin } from 'vue';

// Import Primevue Components and Types
import Button, { type ButtonProps } from 'primevue/button';
import Card, { type CardProps } from 'primevue/card';
import Message, { type MessageProps } from 'primevue/message';
import DatePicker, { type DatePickerProps } from 'primevue/datepicker';
import Select, { type SelectProps } from 'primevue/select';

// Import Custom Components and Types
import VCard, { type VCardProps } from './components/VCard';
import VButton, { type VButtonProps } from './components/VButton';
import { VModal, type VModalProps } from './components/VModal';

// Export components individually
export { VCard, VButton, VModal, Button, Card, Message, DatePicker, Select };
export type {
  VCardProps,
  VButtonProps,
  VModalProps,
  CardProps,
  MessageProps,
  DatePickerProps,
  SelectProps,
  ButtonProps,
};

// Export all components as an object
export const components = {
  VCard,
  VModal,
  Button,
  Card,
  Message,
  DatePicker,
  Select,
};

// Create a Vue plugin
const UIComponentLibrary: Plugin = {
  install(app: App) {
    // Register each component globally
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

export default UIComponentLibrary;
