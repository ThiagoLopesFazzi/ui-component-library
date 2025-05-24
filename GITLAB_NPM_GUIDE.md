# Local Development with an NPM Registry

This guide explains how to set up local development with an NPM registry for the UI component library.

## Prerequisites

- Access to an NPM registry (e.g., npmjs.com, GitHub Packages, etc.)
- Account credentials for the chosen NPM registry

## Setup for Publishing

1. Create a `.npmrc` file in your home directory (or merge with existing) if your registry requires specific configuration (e.g., for private packages or custom scopes). For public publishing to npmjs.com, this might not be strictly necessary if you log in via CLI.

   Example for a scoped package on a generic registry:

   ```
   @your-scope:registry=https://your-registry-url.com/
   //your-registry-url.com/:_authToken=YOUR_AUTH_TOKEN
   ```

2. Log in to your chosen NPM registry:

   For npmjs.com:

   ```bash
   npm login
   ```

   Follow the prompts for username, password, and email.

   For other registries (replace with your registry's URL and scope if applicable):

   ```bash
   npm login --scope=@your-scope --registry=https://your-registry-url.com/
   ```

## Publishing Manually

1. Ensure the `name` in `package.json` is correct (e.g., `ui-component-library` or `@your-scope/ui-component-library`).
2. Update the version in `package.json` as needed (e.g., `npm version patch`).
3. Build the library:
   ```bash
   npm run build
   ```
4. Publish:
   ```bash
   npm publish
   ```
   If publishing a scoped package for the first time, you might need to add `--access public` if it's intended to be public:
   ```bash
   npm publish --access public
   ```

## Using the Package in Another Project

1. If you published to a private registry or a custom-scoped public registry, configure your project's `.npmrc` to point to that registry for the relevant scope:

   ```
   @your-scope:registry=https://your-registry-url.com/
   //your-registry-url.com/:_authToken=YOUR_AUTH_TOKEN_OR_USE_ENV_VAR
   ```

2. Install the package:

   ```bash
   npm install ui-component-library # or @your-scope/ui-component-library
   ```

3. Import in your Vue app:

   ```typescript
   // main.ts
   import { createApp } from 'vue';
   import App from './App.vue';
   import PrimeVue from 'primevue/config'; // Assuming PrimeVue is still a peer/dependency
   import UIComponentLibrary from 'ui-component-library'; // or @your-scope/ui-component-library
   import 'ui-component-library/dist/style.css'; // or @your-scope/ui-component-library/dist/style.css

   const app = createApp(App);
   app.use(PrimeVue, {
     ripple: true,
   });
   app.use(UIComponentLibrary);
   app.mount('#app');
   ```

## Troubleshooting

### Authentication Issues

If you encounter authentication issues:

1. Verify your authentication token/credentials are correct and have the necessary permissions for publishing/reading.
2. Ensure your token hasn't expired.
3. Check that your `.npmrc` file has the correct format and registry URLs.

### Package Not Found

If the package isn't found during installation:

1. Verify the package name (including scope, if any) is correct.
2. Ensure your registry configuration in `.npmrc` is correct for the project consuming the package.
3. Check that the package has been successfully published to the registry and is accessible with your credentials.
