import "../styles/globals.css";
import { ChakraProvider, extendTheme, Global } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `"Roboto Condensed", sans-serif`,
    heading: `"Roboto Condensed", sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
