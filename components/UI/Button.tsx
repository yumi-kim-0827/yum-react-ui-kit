import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  link?: string;
}

const ButtonWrap = styled.button`
  padding: 20px;
  border-radius: 10px;
  color: #000;
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

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <ButtonWrap>
      <Link href={`${link}`}>{text}</Link>
    </ButtonWrap>
  );
};

export default Button;
