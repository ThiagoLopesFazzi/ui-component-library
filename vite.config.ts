/// <reference types="vitest" />
// import { defineConfig } from 'vitest/config'; // This line was causing issues
import { defineConfig } from 'vite'; // Reverted to vite's defineConfig
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import type { InlineConfig } from 'vitest'; // Added for typing the 'test' property
import type { UserConfig } from 'vite'; // Added for base UserConfig type

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UIComponentLibrary',
      // the proper extensions will be added
      fileName: (format) => `ui-component-library.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'primevue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          primevue: 'PrimeVue',
        },
        // Generate CSS file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return assetInfo.name;
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx,vue}'],
      exclude: [
        'src/index.ts',
        'dev/**^*',
        '**/*.d.ts',
        '**/*.test.{ts,tsx,js,jsx}',
        '**/*.spec.{ts,tsx,js,jsx}',
      ],
    },
  },
} as UserConfig & { test: InlineConfig }); // Added type assertion
