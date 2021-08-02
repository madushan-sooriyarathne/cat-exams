import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@styles/global-styles";
import theme from "@styles/theme";

import "../styles/fonts.css";

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          CATEXAMS.LK | Common Admission Test Preparation Guides & Classes
        </title>
      </Head>
      {/* View port meta tags here */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
