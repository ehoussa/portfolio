import { extendTheme } from '@chakra-ui/react';
import { Fonts } from './Fonts';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'Roboto, sans-serif',
      },
    }),
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
});

export default theme;