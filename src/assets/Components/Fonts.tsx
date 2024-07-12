import { css } from '@emotion/react';

export const Fonts = css`
  @font-face {
    font-family: 'Roboto';
    src: url('/path-to-your-fonts/Roboto-Regular.woff2') format('woff2'),
         url('/path-to-your-fonts/Roboto-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/path-to-your-fonts/Roboto-Bold.woff2') format('woff2'),
         url('/path-to-your-fonts/Roboto-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;