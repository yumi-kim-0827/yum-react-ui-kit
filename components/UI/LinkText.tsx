import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface LinkTextProps {
  text: string;
  href: string;
}

const LickWrap = styled.span`
  padding: 5px;
  border: 1px solid #b9b0b8;
  border-radius: 200px;
`;

const LinkText: React.FC<LinkTextProps> = ({ text, href }) => {
  return (
    <LickWrap>
      <Link href={`${href}`}>{text}</Link>
    </LickWrap>
  );
};

export default LinkText;
