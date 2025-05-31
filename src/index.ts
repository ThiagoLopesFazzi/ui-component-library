import { App, Plugin } from 'vue';

// Import Primevue Components and Types
import Button, { type ButtonProps } from 'primevue/button';
import Card, { type CardProps } from 'primevue/card';
import Message, { type MessageProps } from 'primevue/message';
import DatePicker, { type DatePickerProps } from 'primevue/datepicker';
import Select, { type SelectProps } from 'primevue/select';
import DataTable, { type DataTableProps } from 'primevue/datatable';
import Column, { type ColumnProps } from 'primevue/column';
import ColumnGroup, { type ColumnGroupProps } from 'primevue/columngroup';
import Row, { type RowProps } from 'primevue/row';

// Import Custom Components and Types
import VCard, { type VCardProps } from './components/VCard';
import VButton, { type VButtonProps } from './components/VButton';
import { VModal, type VModalProps } from './components/VModal';
import VDataTable, { type VDataTableProps } from './components/VDataTable';
import VColumn, {
  type VColumnProps,
  type SortIconSlotProps,
} from './components/VColumn';

// Export components individually
export {
  VCard,
  VButton,
  VModal,
  VDataTable,
  VColumn,
  Button,
  Card,
  Message,
  DatePicker,
  Select,
};

export type {
  VCardProps,
  VButtonProps,
  VModalProps,
  VDataTableProps,
  VColumnProps,
  SortIconSlotProps,
  CardProps,
  MessageProps,
  DatePickerProps,
  SelectProps,
  ButtonProps,
  DataTableProps,
  ColumnProps,
  ColumnGroupProps,
  RowProps,
};

// Export all components as an object
export const components = {
  VCard,
  VButton,
  VModal,
  VDataTable,
  VColumn,
  Button,
  Card,
  Message,
  DatePicker,
  Select,
  DataTable,
  Column,
  ColumnGroup,
  Row,
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
