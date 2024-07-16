import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
//Components
import Main from "@/components/Layout/Main";
import Grid from "@/components/Layout/Grid";
import SubjectTitle from "@/components/UI/SubjectTitle";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import Modal from "@/components/UI/Modal";

const Editor = dynamic(() => import("@/components/UI/Editor"), {
  ssr: false,
  loading: () => <p>로딩 중</p>,
});

const Article = () => {
  const { id } = useRouter().query;
  const router = useRouter();
  //해당 article 정보
  const [article, setArticle] = useState({
    content: "",
    createdAt: "",
    nickname: "",
    password: "",
    title: "",
    updatedAt: "",
    __v: 0,
    _id: "",
  });
  //수정 에디터 오픈 여부 상태관리
  const [onEditor, setOnEditor] = useState(false);
  //수정할 때 인증을 위한 모달 비밀번호 입력 상태관리
  const [onModal, setOnModal] = useState(false);
  //수정할 때 인증을 위한 모달 비밀번호 입력 상태관리
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 해당 article 조회
  const fetchArticle = async () => {
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
    fetchArticle();
  }, [id]);

  // 해당 article 수정
  const fetchArticleUpdate = async () => {
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

  // 해당 article 삭제
  const fetchArticleDelete = async () => {
    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      alert("해당 게시글이 삭제되었습니다.");
      router.push("/gallery/gallery");
    } catch (error) {
      console.log("글삭제 에러", error);
    }
  };

  const handleOnEditor = () => {
    if (article.password === passwordConfirm) {
      setOnModal(false);
      setOnEditor(true);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticle((prev) => ({ ...prev, title: e.target.value }));
  };

  const onChangeContent = (content: string) => {
    setArticle((prev) => ({ ...prev, content: content }));
  };

  const navigateToGallery = () => {
    router.push("/gallery/gallery");
  };

  const handleOpenModal = () => {
    setOnModal(!onModal);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  return (
    <>
      <Grid $column="1fr" $place="center">
        <Main>
          <Grid $column="1fr auto" $place="end">
            {/* 수정 에디터 여부에 따라 렌더링 */}
            {onEditor ? null : (
              <>
                <Button onClick={handleOpenModal}>글 수정열기</Button>
                <Button onClick={fetchArticleDelete}>삭제하기</Button>
              </>
            )}
          </Grid>
          <Grid $column="1fr">
            {/* 비밀번호 확인되면 수정 에디터가 보임 */}
            {!onEditor ? (
              <>
                <Grid $column="auto 1fr">
                  <p>닉네임 : {article.nickname} |</p>
                  <span>
                    업데이트 날짜 :
                    {new Date(article.updatedAt).toLocaleDateString()}
                  </span>
                </Grid>
                <SubjectTitle title={article.title} />
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </>
            ) : (
              <>
                <Input
                  placeholder="제목을 적어주세요."
                  onChange={onChangeTitle}
                />
                <Editor onChange={onChangeContent} value={article.content} />
                <Grid $column="1fr 1fr auto" $place="end">
                  <Button onClick={fetchArticleUpdate}>수정된 글 업로드</Button>
                  <Button
                    onClick={() => {
                      setOnEditor(false);
                    }}
                  >
                    취소
                  </Button>
                  <Button onClick={navigateToGallery}>목록으로</Button>
                </Grid>
              </>
            )}
          </Grid>
        </Main>
      </Grid>
      {/* 비밀번호 확인 모달 */}
      {onModal ? (
        <Modal onClick={handleOpenModal}>
          <Input
            placeholder="비밀번호를 적어주세요."
            onChange={onChangePassword}
          />
          <Grid $column="1fr 1fr" $place="center">
            <Button onClick={handleOnEditor}>확인</Button>
            <Button onClick={handleOpenModal}>취소</Button>
          </Grid>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default Article;
