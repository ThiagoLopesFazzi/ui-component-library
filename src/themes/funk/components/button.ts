import { DtFunction } from '@/themes/funk/components/types';

export default {
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
    css: ({ dt }: { dt: DtFunction }) => `
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
};
