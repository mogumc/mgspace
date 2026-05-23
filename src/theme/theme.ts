import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", sans-serif',
    h1: { fontWeight: 800, fontSize: '3rem', letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, fontSize: '1.5rem' },
    body1: { lineHeight: 1.6 },
  },
  shape: { borderRadius: 0 },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 10px rgba(0,0,0,0.08)',
    ...Array(22).fill('none'),
  ] as any,
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: 'none' } } },
  },
});

export default theme;
