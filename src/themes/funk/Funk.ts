import { definePreset } from '@primeuix/themes';
// import Nora from '@primeuix/themes/nora';
// import Material from '@primeuix/themes/material';
import Aura from '@primeuix/themes/aura';
import { BaseDesignTokens, Preset } from '@primeuix/themes/types';
import button from '@/themes/funk/components/button';
import card from '@/themes/funk/components/card';
import datatable from '@/themes/funk/components/dataTable';

const funk: Preset<BaseDesignTokens> = definePreset(Aura, {
  components: {
    ...button,
    ...card,
    ...datatable,
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
