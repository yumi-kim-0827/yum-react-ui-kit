import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export interface ArticleListItemProps {
  nickname?: string;
  title?: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

const ArticleListItemWrap = styled.div`
  padding: 10px;
  margin: 0 0 20px 0;
  border-radius: 10px;
  border: 1px solid #b9b0b8;
  background-color: #e9e5e9;
  &:hover {
    border: 1px solid #452f42;
    cursor: pointer;
  }
`;

const ArticleListHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArticleListTitle = styled.h4`
  font-weight: bold;
`;

export const ArticleListItem: React.FC<{ article: ArticleListItemProps }> = ({
  article,
}) => {
  const router = useRouter();

  return (
    <ArticleListItemWrap
      onClick={() => {
        router.push(`/gallery/${article._id}`);
      }}
    >
      <ArticleListHead>
        <p>{article.nickname}</p>
        <p>{article.updatedAt}</p>
      </ArticleListHead>
      <ArticleListTitle>{article.title}</ArticleListTitle>
    </ArticleListItemWrap>
  );
};
