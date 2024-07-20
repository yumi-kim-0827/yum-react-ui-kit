import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder: string;
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumberStyled = styled.input.attrs({ type: "number" })`
  padding: 10px;
  width: 100%;
  font-size: 18px;
  border-bottom: 1px solid transparent;
  overflow: hidden;
  &:focus {
    border-bottom: 1px solid #955a8e;
  }
`;

const InputNumber: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputNumberStyled
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></InputNumberStyled>
  );
};

export default InputNumber;
