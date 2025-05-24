import { App, Plugin } from 'vue';

// Import components
import VCard, { type VCardProps } from './components/VCard';
import VButton, { type VButtonProps } from './components/VButton';
import { VModal, type VModalProps } from './components/VModal'; // Corrected path and import style

// Import styles
import './styles/index.scss';

// Export components individually
export { VCard, VButton, VModal };
export type { VCardProps, VButtonProps, VModalProps };

// Export all components as an object
export const components = {
  VCard,
  VButton,
  VModal,
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
