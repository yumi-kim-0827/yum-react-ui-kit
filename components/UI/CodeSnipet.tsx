import React from "react";
import styled from "styled-components";

interface CodeSnipetProps {
  children: string;
}

const CodeSnipetWrap = styled.pre`
  padding: 10px;
  white-space: pre-wrap;
  color: #c2abbf;
  background-color: #2c232b;
  border-radius: 10px;
  overflow-x: auto;
`;

const CodeSnipet: React.FC<CodeSnipetProps> = ({ children }) => {
  return <CodeSnipetWrap>{children}</CodeSnipetWrap>;
};

export default CodeSnipet;
