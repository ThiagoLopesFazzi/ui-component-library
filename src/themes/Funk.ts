import { definePreset } from '@primeuix/themes';
// import Nora from '@primeuix/themes/nora';
// import Material from '@primeuix/themes/material';
import Aura from '@primeuix/themes/aura';
import { Preset } from '@primeuix/themes/types';

const MyPreset: Preset = definePreset(Aura, {
  components: {
    card: {
      colorScheme: {
        light: {
          title: {
            fontSize: '1.25rem',
            fontWeight: '600',
          },
          subtitle: {
            color: '{red.500}',
          },
        },
      },
    },
  },
  semantic: {
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
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      950: '#121212',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{semantic.primary.900}',
          inverseColor: '#ffffff',
          hoverColor: '{yellow.900}',
          activeColor: '{blue.800}',
          focusColor: '{cyan.800}',
        },
        formField: {
          hoverBorderColor: '{primary.color.500}',
          focusBorderColor: '{red-500}',
        },
        highlight: {
          background: '{zinc.950}',
          focusBackground: '{green.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
    },
  },
  extend: {
    formField: {
      focusBorderWidth: '.3rem',
    },
  },
  focusRing: {
    width: '4px',
    style: 'dashed',
    color: '{red.500}',
    offset: '1px',
  },
});

export default MyPreset;
