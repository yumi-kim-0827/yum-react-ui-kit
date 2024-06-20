import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface LinkIconProps {
  href: string;
  imgSrc: string;
}

const LickIconWrap = styled.span`
  position: relative;
  width: 30px;
  height: 30px;
`;

const LinkIcon: React.FC<LinkIconProps> = ({ imgSrc, href }) => {
  return (
    <LickIconWrap>
      <Link href={href}>
        <Image
          fill
          src={`/images/${imgSrc}`}
          alt="github icon"
          style={{ objectFit: "cover" }}
        />
      </Link>
    </LickIconWrap>
  );
};

export default LinkIcon;
