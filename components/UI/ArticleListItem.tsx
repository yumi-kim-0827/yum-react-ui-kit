import React from "react";
import Link from "next/link";
import styled from "styled-components";

export interface ArticleListItemProps {
  id?: number;
  title?: string;
  text?: string;
  date?: string;
}

const ArticleListItemWrap = styled.li`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #b9b0b8;
  background-color: #e9e5e9;
  &:hover {
    border: 1px solid #452f42;
  }
`;

export const ArticleListItem: React.FC<{ article: ArticleListItemProps }> = ({
  article,
}) => {
  return (
    <ArticleListItemWrap>
      <Link href="/">
        <p>{article.id}</p>
        <p>{article.title}</p>
        <p>{article.text}</p>
        <p>{article.date}</p>
      </Link>
    </ArticleListItemWrap>
  );
};
