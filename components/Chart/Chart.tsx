import React, { useLayoutEffect } from "react";
/* Imports */
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function maybeDisposeRoot(divId: string) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id == divId) {
      root.dispose();
    }
  });
}

const Chart = () => {
  useLayoutEffect(() => {
    maybeDisposeRoot("chartdiv");
    let root = am5.Root.new("chartdiv");
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        wheelY: "zoomX",
      })
    );

    // 데이터
    const data = [
      {
        date: new Date(2021, 0, 1).getTime(),
        value: 100,
        value2: 220,
      },
      {
        date: new Date(2021, 0, 2).getTime(),
        value: 320,
        value2: 300,
      },
      {
        date: new Date(2021, 0, 3).getTime(),
        value: 216,
        value2: 120,
      },
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraTooltipPrecision: 1,
        renderer: am5xy.AxisRendererY.new(root, {
          minGridDistance: 30,
        }),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 20,
          cellStartLocation: 0.2,
          cellEndLocation: 0.8,
        }),
      })
    );

    // Create series
    function createSeries(name: string, field: string) {
      var series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {}),
        })
      );

      series.strokes.template.setAll({
        strokeWidth: 2,
      });

      series.events.on("datavalidated", function () {
        // @ts-ignore
        chart.get("cursor").setAll({
          positionX: 0.99,
          positionY: 0.4,
          xAxis: xAxis,
          yAxis: yAxis,
          alwaysShow: true,
        });
      });

      // @ts-ignore
      series.get("tooltip").label.set("text", "[bold]{name}[/]: {valueY}");
      series.data.setAll(data);
    }
    //여기서 그래프 변수 생성
    createSeries("apple", "value");
    createSeries("banana", "value2");
    createSeries("grape", "value3");

    // Add cursor
    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
        xAxis: xAxis,
      })
    );

    xAxis.set(
      "tooltip",
      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    yAxis.set(
      "tooltip",
      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id={"chartdiv"} style={{ width: "1000px", height: "500px" }} />;
};

export default Chart;
