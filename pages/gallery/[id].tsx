import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
//Components
import Layout from "@/components/Layout/Layout";
import Grid from "@/components/Layout/Grid";
import SubjectTitle from "@/components/UI/SubjectTitle";

const Article = () => {
  const { id } = useRouter().query;
  const [article, setArticle] = useState({
    content: "",
    createdAt: "",
    nickname: "",
    password: "",
    title: "",
    updatedAt: "",
    __v: 0,
    _id: "",
  }); //해당 게시글 상태관리
  console.log(id);

  const fetchThisArticle = async () => {
    if (id) {
      try {
        const res = await fetch(`/api/gallery/${id}`);
        const article = await res.json();
        console.log("해당 게시글 가져오기 펫치!", article);
        setArticle({ ...article });
      } catch (error) {
        console.error("Failed to fetch this article:", error);
      }
    }
  };

  useEffect(() => {
    fetchThisArticle();
  }, [id]);
  return (
    <>
      <Layout>
        <Grid $column="1fr">
          <SubjectTitle title={"자유게시판"} />
          <p>제목 : {article.title}</p>
          <p>닉네임 : {article.nickname}</p>
          <p>업데이트 날짜 : {article.title}</p>
          <p>본문 : {article.content}</p>
        </Grid>
      </Layout>
    </>
  );
};

export default Article;
