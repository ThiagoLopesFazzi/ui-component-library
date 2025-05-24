# UI Component Library

A Vue 3 component library with PrimeVue 4 integration.

## Features

- Vue 3 Composition API support
- PrimeVue 4 components with consistent styling
- TypeScript support
- Built with Vite for fast development and builds

## Installation

Install the package:

```bash
npm install ui-component-library
```

or

```bash
yarn add ui-component-library
```

## Usage

### Global Registration

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import UIComponentLibrary from 'ui-component-library';
import 'ui-component-library/dist/style.css';

const app = createApp(App);
app.use(UIComponentLibrary);
app.mount('#app');
```

### Individual Component Registration

```typescript
// Component.vue
<script setup lang="ts">
import { VCard, VButton } from 'ui-component-library'
import 'ui-component-library/dist/style.css'
</script>

<template>
  <VCard>
    <template #title>Card Title</template>
    <template #content>
      Card content goes here
    </template>
    <template #footer>
      <VButton label="Submit" severity="primary" />
    </template>
  </VCard>
</template>
```

## Available Components

### VCard

A wrapper around PrimeVue's Card component.

```vue
<VCard>
  <template #header>Card Header</template>
  <template #title>Card Title</template>
  <template #subtitle>Card Subtitle</template>
  <template #content>Card Content</template>
  <template #footer>Card Footer</template>
</VCard>
```

### VButton

A wrapper around PrimeVue's Button component.

```vue
<VButton
  label="Submit"
  severity="primary"
  icon="pi pi-check"
  outlined
  rounded
  @click="handleClick"
/>
```

## Development

### Project Setup

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Publishing

1. Update the version in `package.json`
2. Build the library: `npm run build`
3. Login to your NPM registry (if needed)
4. Publish: `npm publish`

## License

This project is licensed under the terms of the ISC license.
