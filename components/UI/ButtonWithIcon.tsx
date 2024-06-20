import React from "react";
import Image from "next/image";
import styled from "styled-components";

interface ButtonWithIconProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  imgSrc: string;
}

const ButtonWithIconWrap = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  overflow: hidden;
  img {
    margin: 0 auto;
    filter: invert(76%) sepia(3%) saturate(1484%) hue-rotate(257deg)
      brightness(91%) contrast(99%);
  }
`;

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ onClick, imgSrc }) => {
  return (
    <ButtonWithIconWrap onClick={onClick}>
      <Image
        // fill
        src={`/images/${imgSrc}`}
        alt="copy icon"
        // style={{ objectFit: "cover" }}
        width={20}
        height={20}
      />
    </ButtonWithIconWrap>
  );
};

export default ButtonWithIcon;
