import React, { useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
// Components
import Main from "@/components/Layout/Main";
import Grid from "@/components/Layout/Grid";
import SubjectTitle from "@/components/UI/SubjectTitle";
import Card from "@/components/UI/Card";
import CardHead from "@/components/UI/CardHead";
import InputNumber from "@/components/UI/InputNumber";

const ChartWrap = styled.div`
  width: 100%;
  height: 500px;
`;

const Chart = dynamic(() => import("@/components/Chart/Chart"), {
  loading: () => <p>로딩 중 ...</p>,
  ssr: false,
});

const Infographic = () => {
  const [firstData, setFirstData] = useState<number>(10);
  const [secondData, setSecondData] = useState<number>(0);

  const onChangeFirstData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstData(Number(e.target.value));
  };

  const onChangeSecondData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondData(Number(e.target.value));
  };

  return (
    <>
      <Grid $column="1fr" $place="center">
        <Main>
          <SubjectTitle
            title="차트 인포그래픽"
            text="인터랙티브한 인포그래픽 그래프"
          />
          <Grid $column="repeat(2, 1fr)">
            <Card>
              <CardHead>데이터 1 입력</CardHead>
              <InputNumber
                placeholder="숫자로 적어주세요"
                onChange={onChangeFirstData}
              />
            </Card>
            <Card>
              <CardHead>데이터 2 입력</CardHead>
              <InputNumber
                placeholder="숫자로 적어주세요"
                onChange={onChangeSecondData}
              />
            </Card>
          </Grid>
          <ChartWrap>
            <Chart firstData={firstData} secondData={secondData} />
          </ChartWrap>
        </Main>
      </Grid>
    </>
  );
};

export default Infographic;
