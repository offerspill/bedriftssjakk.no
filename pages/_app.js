import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const GlobalStyle = createGlobalStyle`
  html {
      scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#423cec",
    text: {
      light: "#fff",
    },
  },
};

const chakraTheme = extendTheme({
  fonts: {
    body: "sans-serif",
    heading: "sans-serif",
    mono: "Menlo, monospace",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}
