import React from "react";
import styled from "styled-components";
import {
  ArticleListItem,
  ArticleListItemProps,
} from "@/components/UI/ArticleListItem";

interface ArticleListProps {
  articleListData?: ArticleListItemProps[];
}

const ArticleListWrap = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media ${({ theme }) => theme.device.small} {
    grid-template-columns: 1fr;
  }
`;

const ArticleList: React.FC<ArticleListProps> = ({ articleListData }) => {
  return (
    <ArticleListWrap>
      {articleListData?.map((article) => {
        return <ArticleListItem key={article.id} article={article} />;
      })}
    </ArticleListWrap>
  );
};

export default ArticleList;
