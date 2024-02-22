import {
  ChakraProvider,
  StyleFunctionProps,
  extendTheme,
} from "@chakra-ui/react";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import style from "./style";

export default function App() {
  const globalCss = style();

  const theme = extendTheme({
    fonts: {
      heading: `MinSans`,
      body: `MinSans`,
    },
  });

  return (
    <>
      <Global styles={globalCss} />
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}
