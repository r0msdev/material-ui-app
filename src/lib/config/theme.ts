'use client';
import { createTheme } from '@mui/material/styles';
import Link from '@/shared/ui/Link';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#dc004e',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#f48fb1',
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
  },
});

export default theme;
