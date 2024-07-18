import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      '@font-face': [
        {
          fontFamily: 'CustomFont1',
          src: `url('../public/font1.otf') format('opentype')`,
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
        {
          fontFamily: 'CustomFont2',
          src: `url('../public/font2.otf') format('opentype')`,
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      ],
    },
  },
  fonts: {
    body: 'CustomFont1, sans-serif', 
    heading: 'CustomFont2, serif',   
  },
});

export default theme;
