'use client';
import { createTheme } from '@mui/material/styles';
import Link from './components/Link';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  cssVariables: true,
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