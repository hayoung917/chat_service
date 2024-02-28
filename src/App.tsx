import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Router } from './router';
import { BrowserRouter } from 'react-router-dom';
import style from './style';
import { Global } from '@emotion/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: 'hsla(9, 100%, 58%, 1)',
    },
  },
  // fonts: {
  //   heading: `MinSans`,
  //   body: `MinSans`,
  // },
});

export default function App() {
  const globalCss = style();

  return (
    <>
      <Global styles={globalCss} />
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: { position: 'top' } }}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}
