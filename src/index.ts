import { App, Plugin } from 'vue';

// Import components
import { VCard } from './components/VCard';
import { VButton } from './components/VButton';
import { VModal } from '@/components/VModal';

// Import styles
import './styles/index.scss';

// Export components individually
export { VCard, VButton, VModal };

// Export all components as an object
export const components = {
  VCard,
  VButton,
  VModal,
};

// Create a Vue plugin
const VennexUI: Plugin = {
  install(app: App) {
    // Register each component globally
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

export default VennexUI;
