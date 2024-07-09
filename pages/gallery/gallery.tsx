import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
//Components
import Layout from "@/components/Layout/Layout";
import Grid from "@/components/Layout/Grid";
import Button from "@/components/UI/Button";
import SearchForm from "@/components/UI/SearchForm";
import SubjectTitle from "@/components/UI/SubjectTitle";
import ArticleList from "@/components/UI/ArticleList";

const Gallery = () => {
  const router = useRouter();
  const navigateToWrite = () => {
    router.push("/gallery/write");
  };
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await fetch("/api/gallery");
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  console.log(articles);
  return (
    <>
      <Head>
        <title>자유게시판</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Grid $column="1fr auto" $place="end">
          <SearchForm />
          <Button onClick={navigateToWrite}>글쓰기</Button>
        </Grid>
        <Grid $column={"1fr"}>
          <SubjectTitle
            title="자유게시판"
            text="자유롭게 작업 이야기를 해요."
          />
          <ArticleList articles={articles} />
        </Grid>
      </Layout>
    </>
  );
};

export default Gallery;
