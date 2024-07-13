import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
//Components
import Layout from "@/components/Layout/Layout";
import Grid from "@/components/Layout/Grid";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

const Editor = dynamic(() => import("@/components/UI/Editor"), {
  ssr: false,
  loading: () => <p>로딩 중</p>,
});

const Write = () => {
  const [nickname, setNickName] = useState("anonymous");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (content: string) => {
    setContent(content);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/gallery/article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, password, title, content }),
      });
      alert("새로운 글이 등록되었습니다.");
    } catch (error) {
      console.error(error + "업로드 버튼 에러");
    }
  };

  return (
    <>
      <Head>
        <title>글쓰기</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Grid $column={"1fr"}>
          {nickname}
          {password}
          {title}
          {content}
          <Input
            placeholder="닉네임 적어주세요"
            value={nickname}
            onChange={onChangeNickName}
          />
          <Input
            placeholder="비밀번호를 적어주세요"
            value={password}
            onChange={onChangePassword}
          />
          <Input
            placeholder="제목을 적어주세요."
            value={title}
            onChange={onChangeTitle}
          />
          <Editor onChange={onChangeContent} />
          <Button onClick={handleSubmit}>업로드</Button>
        </Grid>
      </Layout>
    </>
  );
};

export default Write;
