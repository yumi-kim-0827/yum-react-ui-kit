import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { MenuProvider } from "@/contexts/MenuContext";
import theme from "@/styles/theme";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  // 스타일 객체 정의
  const mainStyle = {
    padding: "20px",
  };
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MenuProvider>
        <div style={mainStyle}>
          <Component {...pageProps} />
        </div>
      </MenuProvider>
      <Footer />
    </ThemeProvider>
  );
}
