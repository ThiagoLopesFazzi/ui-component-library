import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';

// Import component library (local version)
import VennexUI from '../src';
import '../src/styles/index.scss';

// Create the app
const app = createApp(App);

// Configure PrimeVue with Aura preset
app.use(PrimeVue, {
  theme: {
    preset: Material,
    ripple: true, // Enable ripple effect
    options: {
      // Added options for CSS Layer
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
});

// Use Vennex UI component library
app.use(VennexUI);

// Mount the app
app.mount('#app');
