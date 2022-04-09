import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    muikit: {
      one: string;
      two: string;
      three: string;
      four: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    muikit?: {
      one?: string;
      two?: string;
      three?: string;
      four?: string;
    };
  }
}

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#F00118',
      main: '#F00118',
      dark: '#F00118',
    },
    secondary: {
      light: '#FFC61D',
      main: '#FFC61D',
      dark: '#FFC61D',
    },
    text: {
      primary: '#F4F6F7',
      secondary: '#888888',
    },
    background: {
      default: '#F4F6F7',
    },
  },
  muikit: {
    one: '#E3E1E3',
    two: '#888888',
    three: '#4F4F4F',
    four: '#24252D',
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Roboto Condensed', sans-serif",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    text: {
      ...rawTheme.palette.text,
      tertiary: '#4F4F4F',
      quaternary: '#24252D',
    },
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;
