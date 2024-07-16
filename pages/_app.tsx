import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { MenuProvider } from "@/contexts/MenuContext";
import theme from "@/styles/theme";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
      <Footer />
    </ThemeProvider>
  );
}
