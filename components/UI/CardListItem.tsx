import React from "react";
import Image from "next/image";
import styled from "styled-components";

export interface CardListItemProps {
  text: string;
  imgSrc: string;
  reference: string;
}

const CardListItemWrap = styled.li`
  padding: 10px;
  flex: 1;
  border-right: 1px solid #b9b0b8;
  text-align: center;
  &:last-child {
    border: 0;
  }
`;

export const CardListItem: React.FC<{ cardListItem: CardListItemProps }> = ({
  cardListItem,
}) => {
  return (
    <CardListItemWrap>
      <Image
        src={`/images/${cardListItem.imgSrc}`}
        alt=""
        width={200}
        height={200}
      />
      <h3>{cardListItem.text}</h3>
      <span>{cardListItem.reference}</span>
    </CardListItemWrap>
  );
};
