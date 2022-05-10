import { Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={{
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      html: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
      },
      body: {
        height: '100%',
        width: '100%',
      },
      a: {
        textDecoration: 'none',
      },
      '#root': {
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
      },
    }}
  />
);

export default GlobalStyles;
