import React from "react";
import { useRouter } from "next/router";
//Components
import Layout from "@/components/Layout/Layout";
import Grid from "@/components/Layout/Grid";
import SubjectTitle from "@/components/UI/SubjectTitle";

const Article = () => {
  const { id } = useRouter().query;
  return (
    <>
      <Layout>
        <Grid column="1fr">
          <SubjectTitle title={"버튼"} />
          {id} 상세 게시글 페이지
        </Grid>
      </Layout>
    </>
  );
};

export default Article;
