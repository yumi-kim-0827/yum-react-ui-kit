import React from "react";
import styled from "styled-components";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const Main = styled.main`
  margin: 50px auto;
  padding: 50px 20px;
  width: 100%;
  max-width: 1200px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2),
    -8px -8px 16px rgba(255, 255, 255, 0.2);
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
