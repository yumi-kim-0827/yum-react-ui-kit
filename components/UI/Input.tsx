import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder: string;
  value: string | "";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputStyled = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 18px;
  border-bottom: 1px solid transparent;
  overflow: hidden;
  &:focus {
    border-bottom: 1px solid #955a8e;
  }
`;

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <InputStyled
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></InputStyled>
  );
};

export default Input;
