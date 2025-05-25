import { definePreset } from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';
// import Material from '@primeuix/themes/material';
// import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Nora, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
    },
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
  },
});

// const funk = {
//   name: 'funk', // Naming your custom theme
//   colorScheme: {
//     light: {
//       //   ...baseLightScheme,
//       ...Nora.components?.button?.colorScheme?.light,
//       primary: {
//         color: '#54505f', // from --ui-primary
//         contrastColor: '#ffffff', // Assuming white text on primary
//       },
//       secondary: {
//         color: '#969da5', // from --ui-secondary
//         contrastColor: '#ffffff', // Assuming white text on secondary
//       },
//       success: {
//         color: '#22c55e', // from --ui-success
//         contrastColor: '#ffffff',
//       },
//       info: {
//         color: '#3b82f6', // from --ui-info
//         contrastColor: '#ffffff',
//       },
//       warning: {
//         color: '#f59e0b', // from --ui-warning
//         contrastColor: '#000000', // Assuming black text on warning
//       },
//       danger: {
//         color: '#ef4444', // from --ui-danger
//         contrastColor: '#ffffff',
//       },
//       text: {
//         // ...baseLightText,
//         color: '#333333', // Default body text color
//       },
//     },
//     dark: {
//       //   ...baseDarkScheme,
//       primary: {
//         color: '#7A778A', // Adjusted for dark mode
//         contrastColor: '#ffffff',
//       },
//       secondary: {
//         color: '#B0B6BF', // Adjusted for dark mode
//         contrastColor: '#000000',
//       },
//       success: {
//         color: '#34D399',
//         contrastColor: '#000000',
//       },
//       info: {
//         color: '#60A5FA',
//         contrastColor: '#000000',
//       },
//       warning: {
//         color: '#FBBF24',
//         contrastColor: '#000000',
//       },
//       danger: {
//         color: '#F87171',
//         contrastColor: '#000000',
//       },
//       text: {
//         // ...baseDarkText,
//         color: '#D1D5DB', // Example dark mode text color
//       },
//     },
//   },
//   font: {
//     // ...baseFont,
//     family: 'Poppins, sans-serif', // from --font-family
//   },
//   borderRadius: {
//     // ...baseBorderRadius,
//     md: '6px', // Default medium border radius
//   },
//   components: {
//     // ...baseComponents,
//     // Example: If you want all buttons to have this border radius by default
//     // button: {
//     //     ...(baseComponents.button || {}), // Ensure baseComponents.button is an object
//     //     borderRadius: '6px'
//     // },
//   },
// };

export default MyPreset;
