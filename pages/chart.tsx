import React from "react";
// import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";
//Components
import Main from "@/components/Layout/Main";
import Grid from "@/components/Layout/Grid";

const ChartWrap = styled.div`
  width: 100%;
  height: 500px;
`;

const data = [
  {
    id: "python",
    label: "python",
    value: 299,
    color: "hsl(55, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 253,
    color: "hsl(72, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 483,
    color: "hsl(87, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 369,
    color: "hsl(309, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 303,
    color: "hsl(286, 70%, 50%)",
  },
];

const Chart = () => {
  return (
    <>
      <Grid $column="1fr" $place="center">
        <Main>
          차트 인포그래픽
          <ChartWrap>
            {/* <ResponsivePie
              data={data}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.4}
              padAngle={7}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
              }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "ruby",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "c",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "go",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "python",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "scala",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "lisp",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "elixir",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "javascript",
                  },
                  id: "lines",
                },
              ]}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000",
                      },
                    },
                  ],
                },
              ]}
            /> */}
          </ChartWrap>
        </Main>
      </Grid>
    </>
  );
};

export default Chart;
