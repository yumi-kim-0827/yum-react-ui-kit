import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
// Components
import Main from "@/components/Layout/Main";
import Grid from "@/components/Layout/Grid";

const ChartWrap = styled.div`
  width: 100%;
  height: 500px;
`;

const Chart = dynamic(() => import("@/components/Chart/Chart"), {
  loading: () => <p>로딩 중 ...</p>,
  ssr: false,
});

const Infographic = () => {
  return (
    <>
      <Grid $column="1fr" $place="center">
        <Main>
          차트 인포그래픽
          <ChartWrap>
            <Chart />
          </ChartWrap>
        </Main>
      </Grid>
    </>
  );
};

export default Infographic;
