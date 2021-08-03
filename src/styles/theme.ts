import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '800': '#FFBA08',
      '700': 'rgba(255, 186, 8, 0.5)',
    },
    gray: {
      '700': '#47585B',
      '600': '#999999',
      '100': '#DADADA',
      '50': '#F5F8FA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  sizes: {
    container: {
      lg: '1160px',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.700',
      },
    },
  },
});
