import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 20px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
