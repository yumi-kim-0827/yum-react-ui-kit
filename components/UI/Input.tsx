import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder: string;
}

const InputStyled = styled.input`
  padding: 10px;
  width: 100%;
  flex: 1 0 auto;
  font-size: 18px;
  border-bottom: 1px solid transparent;
  overflow: hidden;
  &:focus {
    border-bottom: 1px solid #955a8e;
  }
`;

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <InputStyled placeholder={placeholder}></InputStyled>;
};

export default Input;
