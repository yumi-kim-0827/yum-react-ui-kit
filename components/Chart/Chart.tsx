import React from "react";
import styled from "styled-components";
//Chart Components
import BarChart from "@/components/Chart/demo/BarChart";
import MapChart from "@/components/Chart/demo/MapChart";

interface ChartProps {
  firstData: number;
  secondData: number;
}

const ChartWrap = styled.div`
  width: 100%;
  height: 500px;
`;

const Chart: React.FC<ChartProps> = ({ firstData, secondData }) => {
  return (
    <>
      <ChartWrap>
        <BarChart firstData={firstData} secondData={secondData} />
      </ChartWrap>
      {/* <ChartWrap>
        <MapChart firstData={firstData} secondData={secondData} />
      </ChartWrap> */}
    </>
  );
};

export default Chart;
