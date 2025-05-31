import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Funk from '../src/themes/funk/Funk';

// Import component library (local version)
import UIComponentLibrary from '../src';
import 'primeicons/primeicons.css';
import './global.css';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Funk,
    ripple: true,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
});

app.use(UIComponentLibrary);
app.mount('#app');
