import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import getLocaleConfig from "../locales";
import { Provider } from "react-redux";
import store from "../redux";
function MyApp({ Component, pageProps }: AppProps) {
  getLocaleConfig();

  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
