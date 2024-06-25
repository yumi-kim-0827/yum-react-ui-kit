import React from "react";
import styled from "styled-components";

interface HeadingTitleProps {
  bigTitle?: string;
  subTitle?: string;
}

const HeadingTitleBig = styled.h1`
  width: 90%;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  @media ${({ theme }) => theme.device.midium} {
    font-size: 30px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 22px;
  }
`;

const HeadingTitleSub = styled.p`
  width: 80%;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  @media ${({ theme }) => theme.device.midium} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: 16px;
  }
`;

const HeadingTitle: React.FC<HeadingTitleProps> = ({ bigTitle, subTitle }) => {
  return (
    <>
      <HeadingTitleBig>{bigTitle}</HeadingTitleBig>
      <HeadingTitleSub>{subTitle}</HeadingTitleSub>
    </>
  );
};

export default HeadingTitle;
