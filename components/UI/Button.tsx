import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

const ButtonWrap = styled.button`
  padding: 20px;
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  border: 1px solid #71536d;
  background-color: #955a8e;
  &:hover {
    border: 1px solid #452f42;
  }
  a {
    color: #fff;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonWrap onClick={onClick}>{children}</ButtonWrap>;
};

export default Button;
