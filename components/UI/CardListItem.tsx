import React from "react";
import Image from "next/image";
import styled from "styled-components";

export interface CardListItemProps {
  text?: string;
  imgSrc?: string;
  reference?: string;
}

const CardListItemWrap = styled.li`
  padding: 10px;
  flex: 1;
  border-right: 1px solid #b9b0b8;
  text-align: center;
  &:last-child {
    border: 0;
  }
  @media ${({ theme }) => theme.device.midium} {
    border-right: 0;
  }
  @media ${({ theme }) => theme.device.small} {
    border-right: 0;
    h3 {
      font-size: 16px;
    }
    span {
      font-size: 14px;
    }
  }
`;

export const CardListItem: React.FC<{ ListItem: CardListItemProps }> = ({
  ListItem,
}) => {
  return (
    <CardListItemWrap>
      <Image
        src={`/images/${ListItem.imgSrc}`}
        alt="리액트 컴포넌트 그라데이션 UI 키트"
        width={200}
        height={200}
      />
      <h3>{ListItem.text}</h3>
      <span>{ListItem.reference}</span>
    </CardListItemWrap>
  );
};
