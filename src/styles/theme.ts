import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    dark: {
      100: 'RGBA(0, 0, 0, 0.06)',
      200: 'RGBA(0, 0, 0, 0.08)',
      300: 'RGBA(0, 0, 0, 0.16)',
      400: 'RGBA(0, 0, 0, 0.24)',
      500: 'RGBA(0, 0, 0, 0.36)',
      600: 'RGBA(0, 0, 0, 0.48)',
      700: 'RGBA(0, 0, 0, 0.64)',
      800: 'RGBA(0, 0, 0, 0.80)',
      900: 'RGBA(0, 0, 0, 0.92)',
    },
    primaryDark: {
      100: '#121212',
      200: '#202020',
      300: 'RGBA(20, 20, 20, 0.90)',
    },
    primaryWhite: {
      100: '#169992',
      200: '#0d5352',
      300: 'RGBA(16, 99 ,92, 0.80)',
    },
  },
  breakpoints: {
    ssm: '480px',
    sm: '600px',
    md: '801px',
    lg: '1054px',
    xl: '1280px',
  },
  styles: {
    global: {
      body: {
        background: '#fff',
        color: '#000',
        boxSizing: 'border-box',
      },
      'body::-webkit-scrollbar-thumb': {
        backgroundColor: '#7C7C8A',
        borderRadius: '20px',
      },
      'body::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#7C7C6A',
      },
      'body::-webkit-scrollbar': {
        width: '3px',
      },
      '*': {
        margin: 0,
        padding: 0,
      },
    },
  },
});

export default theme;
