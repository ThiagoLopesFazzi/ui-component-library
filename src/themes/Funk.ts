import { definePreset } from '@primeuix/themes';
// import Nora from '@primeuix/themes/nora';
// import Material from '@primeuix/themes/material';
import Aura from '@primeuix/themes/aura';
import { BaseDesignTokens, Preset } from '@primeuix/themes/types';

const funk: Preset<BaseDesignTokens> = definePreset(Aura, {
  components: {
    card: {
      root: {
        color: '{semantic.primary.900}',
        background: '{slate.50}',
        shadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.2rem',
      },
      body: {
        padding: '1.5rem',
      },
      title: {
        fontSize: '1.25rem',
        fontWeight: '600',
      },
      subtitle: {
        color: '{semantic.primary.900}',
      },
      caption: {
        gap: '2rem',
      },
      extend: {
        header: {
          padding: '0.75rem 1.5rem',
          color: '{semantic.primary.0}',
          backgroundColor: '{semantic.primary.800}',
          fontSize: '1.4rem',
          fontWeight: '600',
        },
      },
      css: ({ dt }) => `
        .p-card-header {
          color: ${dt('card.header.color')};
          background-color: ${dt('card.header.backgroundColor')};
          padding: ${dt('card.header.padding')};
          font-size: ${dt('card.header.fontSize')};
      }`,
    },
  },
  semantic: {
    primary: {
      0: '#fff',
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{semantic.primary.950}',
          inverseColor: '#ffffff',
          hoverColor: '{semantic.primary.900}',
          activeColor: '{semantic.primary.800}',
        },
        formField: {
          color: '{semantic.primary.900}',
          borderColor: '{slate.400}',
          background: '{slate.50}',
          hoverBorderColor: '{semantic.primary.700}',
          focusBorderColor: '{semantic.primary.950}',
        },
        highlight: {
          background: '{semantic.primary.950}',
          focusBackground: '{semantic.primary.950}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
    },
  },
  focusRing: {
    width: '4px',
    style: 'dashed',
    color: '{red.500}',
    offset: '1px',
  },
});

export default funk;
