import React from "react";
import styled from "styled-components";

const CardHeadContainer = styled.h3`
  padding: 5px 0;
  color: rgb(52, 52, 52);
  @media ${({ theme }) => theme.device.small} {
    font-size: 16px;
  }
`;

const CardHead: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CardHeadContainer>{children}</CardHeadContainer>;
};

export default CardHead;
