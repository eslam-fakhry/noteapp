import "../styles/globals.scss";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../redux/rootReducer";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
});

function MyApp({ Component, pageProps }: any) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default MyApp;
