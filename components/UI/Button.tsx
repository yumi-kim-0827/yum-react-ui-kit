import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const ButtonWrap = styled.button`
  padding: 20px;
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

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <ButtonWrap onClick={onClick}>{text}</ButtonWrap>;
};

export default Button;
