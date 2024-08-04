import Head from "next/head";
import { useRouter } from "next/router";
//Components
import Main from "@/components/Layout/Main";
import Grid from "@/components/Layout/Grid";
import HeadingTitle from "@/components/UI/HeadingTitle";
import Button from "@/components/UI/Button";
import CardList from "@/components/UI/CardList";

const Home = () => {
  const router = useRouter();

  const navigateToShow = () => {
    router.push("/showcase");
  };

  const cardListData = [
    {
      text: "직접 원하는 색상 2가지를 선택하여 그라데이션 UI 컴포넌트에 반영합니다.",
      imgSrc: "object1.png",
      reference:
        "원하는 색상으로 맞춘 리액트 UI 컴포넌트를 한 번에 제공받으세요",
    },
    {
      text: "다양한 상황에 적용 가능한 다채로운 UI 컴포넌트가 있습니다.",
      imgSrc: "object2.png",
      reference:
        "쉽고 빠른 UI 구성 - 선택한 색상으로 즉시 적용 가능한 컴포넌트 제공",
    },
    {
      text: "간편한 코드 복사 기능을 제공합니다.",
      imgSrc: "object3.png",
      reference:
        "디자인의 일관성과 효율성 - 원하는 컬러로 맞춘 재사용 가능한 UI 컴포넌트",
    },
  ];
  return (
    <>
      <Head>
        <title>Yum Ui Components Kit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid $column="1fr" $place="center">
        <Main>
          <Grid $column="1fr" $place="center">
            <HeadingTitle
              bigTitle="My color pick!, 그라데이션 UI 컴포넌트 KIT"
              subTitle="사용자들이 원하는 컬러를 선택하고, 해당 컬러에 맞춘 UI 컴포넌트를 재사용 가능한 코드로 제공하는 라이브러리 사이트"
            />
            <Button onClick={navigateToShow}>쇼케이스 보기</Button>
            <CardList ListData={cardListData} />
          </Grid>
        </Main>
      </Grid>
    </>
  );
};
export default Home;
