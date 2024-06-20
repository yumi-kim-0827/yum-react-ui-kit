import React from "react";
import styled from "styled-components";
import { CardListItem, CardListItemProps } from "@/components/UI/CardListItem";

interface CardListProps {
  cardListData?: CardListItemProps[];
}

const CardListWrap = styled.ul`
  width: 100%;
  display: flex;
  border-radius: 10px;
  border: 1px solid #b9b0b8;
  background-color: #e9e5e9;
`;

const CardList: React.FC<CardListProps> = ({ cardListData }) => {
  return (
    <CardListWrap>
      {cardListData?.map((cardListItem, id) => {
        return <CardListItem key={id} cardListItem={cardListItem} />;
      })}
    </CardListWrap>
  );
};

export default CardList;
