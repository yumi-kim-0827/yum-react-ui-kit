import React, { useLayoutEffect } from "react";
/* Imports */
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_region_usa_congressional2022_worldLow from "@amcharts/amcharts5-geodata/region/usa/congressional2022/flLow";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

interface ChartProps {
  firstData: number;
  secondData: number;
}

const MapChart: React.FC<ChartProps> = ({ firstData, secondData }) => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chart2div");
    let chart = root.container.children.push(am5map.MapChart.new(root, {}));
    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        // ...
        autoScale: true,
      })
    );
    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0xff0000),
        }),
      });
    });
  }, []);
  return (
    <>
      <div id={"chart2div"} style={{ width: "100%", height: "100%" }} />
    </>
  );
};

export default MapChart;
