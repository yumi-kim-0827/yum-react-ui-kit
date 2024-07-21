import React, { useLayoutEffect } from "react";
/* Imports */
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

interface ChartProps {
  firstData: number;
  secondData: number;
}

function maybeDisposeRoot(divId: string) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id == divId) {
      root.dispose();
    }
  });
}

const Chart: React.FC<ChartProps> = ({ firstData, secondData }) => {
  useLayoutEffect(() => {
    maybeDisposeRoot("chartdiv");
    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    });

    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
    });

    xRenderer.grid.template.setAll({
      location: 1,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "category",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1,
    });

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "category",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    });

    // Set data
    let data = [
      {
        category: "데이터 1",
        value: firstData,
      },
      {
        category: "데이터 2",
        value: secondData,
      },
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, [firstData, secondData]);

  return (
    <>
      <div id={"chartdiv"} style={{ width: "100%", height: "100%" }} />
    </>
  );
};

export default Chart;
