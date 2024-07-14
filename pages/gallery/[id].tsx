import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
//Components
import Layout from "@/components/Layout/Layout";
import Grid from "@/components/Layout/Grid";
import SubjectTitle from "@/components/UI/SubjectTitle";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

const Editor = dynamic(() => import("@/components/UI/Editor"), {
  ssr: false,
  loading: () => <p>로딩 중</p>,
});

const Article = () => {
  const { id } = useRouter().query;
  const router = useRouter();
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
  const [onEditor, setOnEditor] = useState(false);
  // const [title, setTitle] = useState(`${article.title}`);
  // const [content, setContent] = useState(`${article.content}`);

  const fetchThisArticle = async () => {
    if (id) {
      try {
        const res = await fetch(`/api/gallery/${id}`);
        const article = await res.json();
        setArticle({ ...article });
      } catch (error) {
        console.error("Failed to fetch this article:", error);
      }
    }
  };

  useEffect(() => {
    fetchThisArticle();
  }, [id]);

  const handleOnEditor = () => {
    setOnEditor(!onEditor);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticle((prev) => ({ ...prev, title: e.target.value }));
  };

  const onChangeContent = (content: string) => {
    setArticle((prev) => ({ ...prev, content: content }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(article),
      });
      const data = await res.json();
      setArticle(data);
      alert("수정이 완료되었습니다.");
      setOnEditor(false);
    } catch (error) {
      console.log("글수정 에러", error);
    }
  };

  const navigateToGallery = () => {
    router.push("/gallery/gallery");
  };

  return (
    <>
      <Layout>
        <Grid $column="1fr auto" $place="end">
          <Button onClick={handleOnEditor}>글 수정열기</Button>
          {/* <Button>삭제하기</Button> */}
        </Grid>
        <SubjectTitle title="자유게시판" />
        <Grid $column="1fr">
          {!onEditor ? (
            <>
              <p>{article.nickname}</p>
              <span>
                업데이트 날짜 {new Date(article.updatedAt).toLocaleDateString()}
              </span>
              <h2>{article.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </>
          ) : (
            <>
              <Input
                placeholder="제목을 적어주세요."
                onChange={onChangeTitle}
              />
              <Editor onChange={onChangeContent} />
              <Button onClick={handleSubmit}>수정된 글 업로드</Button>
            </>
          )}
        </Grid>
        <Grid $column="1fr" $place="end">
          <Button onClick={navigateToGallery}>목록으로</Button>
        </Grid>
      </Layout>
    </>
  );
};

export default Article;
