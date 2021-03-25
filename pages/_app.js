import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";

import ClientProvider from "../context/Clients";
import ConfigProvider from "../context/Configs";
import NumbersProvider from "../context/Numbers";

function MyApp({ Component, pageProps }) {
  return (
    <ClientProvider>
      <ConfigProvider>
        <NumbersProvider>
          <ChakraProvider resetCSS={true} theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </NumbersProvider>
      </ConfigProvider>
    </ClientProvider>
  );
}

export default MyApp;
