import { definePreset } from '@primeuix/themes';
// import Nora from '@primeuix/themes/nora';
// import Material from '@primeuix/themes/material';
import Aura from '@primeuix/themes/aura';
import { BaseDesignTokens, Preset } from '@primeuix/themes/types';
import { error } from 'console';

const funk: Preset<BaseDesignTokens> = definePreset(Aura, {
  components: {
    button: {
      extend: {
        root: {
          borderRadius: '0.2rem',
          height: '4rem',
          backgroundColor: '#9d1804',
          hoverBackgroundColor: '#661a0e',
          outlinedBorderColor: '#454241',
          hoverSecondaryBackgroundColor: '#eeeded',
        },
      },
      css: ({ dt }) => `
        .p-button {
          border-radius: ${dt('button.root.borderRadius')};
          height: ${dt('button.root.height')};
          padding: 0.4rem 1.2rem;
          border: 0.1rem solid transparent;
          font-size: 1.4rem;
          font-weight: 500;
          cursor: pointer;
          color: ${dt('semantic.primary.0')};
        }

        .p-button-primary {
          background: ${dt('red.700')};
        }

        .p-button-primary:not(:disabled):hover {
          background: ${dt('red.800')};
        }

        .p-button-secondary {
          background: transparent;
          color: ${dt('button.root.outlinedBorderColor')};
        }

        .p-button-secondary:not(:disabled):hover {
          background: ${dt('button.root.hoverSecondaryBackgroundColor')};
          color: ${dt('button.root.outlinedBorderColor')};
        }

        .p-button-outlined.p-button-primary {
          background: transparent;
          border: 0.2rem solid ${dt('red.700')};
          color: ${dt('red.700')};
        }

        .p-button-outlined.p-button-primary:not(:disabled):hover  {
          background: ${dt('red.700')};
          border: 0.2rem solid ${dt('red.700')};
          color: ${dt('semantic.primary.0')};
        }

        .p-button-outlined:not(:disabled):hover {
          background: ${dt('button.root.outlinedBorderColor')};
          border: 0.1rem solid ${dt('button.root.outlinedBorderColor')};
          color: ${dt('semantic.primary.0')};
        }

        .p-button-outlined.p-button-secondary {
          background: transparent;
          border: 0.2rem solid ${dt('button.root.outlinedBorderColor')};
          color: ${dt('button.root.outlinedBorderColor')};
        }

        .p-button-outlined.p-button-secondary:not(:disabled):hover {
          background: ${dt('button.root.outlinedBorderColor')};
          border: 0.2rem solid ${dt('button.root.outlinedBorderColor')};
          color: ${dt('semantic.primary.0')};
        }

        .p-button-outlined.p-button-danger {
          background: transparent;
          border: 0.2rem solid ${dt(
            'semantic.colorScheme.light.primary.errorColor'
          )};
          color: ${dt('semantic.colorScheme.light.primary.errorColor')};
        }

        .p-button-outlined.p-button-danger:not(:disabled):hover {
          background: ${dt('semantic.colorScheme.light.primary.errorColor')};
          border: 0.2rem solid ${dt(
            'semantic.colorScheme.light.primary.errorColor'
          )};
          color: ${dt('semantic.primary.0')};
        }
      `,
    },
    card: {
      root: {
        color: '{semantic.primary.900}',
        background: '{slate.50}',
        shadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '0',
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
          padding: '0.75rem 1.5rem 0.75rem 1rem',
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
        }
        .p-card-footer > div {
          display: flex;
          justify-content: end;
          gap: 1rem;
        }
      `,
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
    red: {
      700: '#9d1804',
      800: '#661a0e',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{semantic.primary.950}',
          inverseColor: '#ffffff',
          hoverColor: '{semantic.primary.900}',
          activeColor: '{semantic.primary.800}',
          errorColor: '#ff3f3f',
          primaRed: '#9d1804',
          secondaryRed: '#661a0e',
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
