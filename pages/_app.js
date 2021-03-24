import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";

import ClientProvider from "../context/Clients";
import ConfigProvider from "../context/Configs";

function MyApp({ Component, pageProps }) {
  return (
    <ClientProvider>
      <ConfigProvider>
        <ChakraProvider resetCSS={true} theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ConfigProvider>
    </ClientProvider>
  );
}

export default MyApp;
