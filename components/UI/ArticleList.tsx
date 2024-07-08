import React from "react";
import styled from "styled-components";
import {
  ArticleListItem,
  ArticleListItemProps,
} from "@/components/UI/ArticleListItem";

interface ArticleListProps {
  articles?: ArticleListItemProps[];
}

const ArticleListWrap = styled.div`
  width: 100%;
`;

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <ArticleListWrap>
      {articles?.map((article) => {
        return <ArticleListItem key={article._id} article={article} />;
      })}
    </ArticleListWrap>
  );
};

export default ArticleList;
