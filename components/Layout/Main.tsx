import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  padding: 50px 20px;
  width: 100%;
  max-width: 1200px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.2),
    -8px -8px 16px rgba(255, 255, 255, 0.2);
  @media ${({ theme }) => theme.device.midium} {
    width: 90%;
  }
  @media ${({ theme }) => theme.device.small} {
    padding: 10px;
  }
`;

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
