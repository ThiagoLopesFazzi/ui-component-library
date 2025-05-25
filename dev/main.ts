import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Funk from '../src/themes/Funk';

// Import component library (local version)
import UIComponentLibrary from '../src';
import './global.css';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Funk,
    ripple: true,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
});

app.use(UIComponentLibrary);
app.mount('#app');
