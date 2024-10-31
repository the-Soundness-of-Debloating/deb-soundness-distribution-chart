import { Chart } from "@antv/g2";

const vulTypeShapeMap = {
  "Vul-1 Use of uninitialized variable": "square",
  "Vul-2 Stack-based buffer overflow": "triangle",
  "Vul-3 Heap-based buffer overflow": "triangleDown",
  "Vul-4 Global buffer overflow": "hexagon",
  "Vul-5 Read memory access": "point",
  "Vul-6 Write memory access": "diamond",
  "Vul-7 Direct Leak": "cross",
  "Vul-15 Runtime Error": "bowtie",
  Unknown: "plus",
};
const vulTypeColorMap = {
  "Vul-1 Use of uninitialized variable": "#54b345",
  "Vul-2 Stack-based buffer overflow": "#05b9e2",
  "Vul-3 Heap-based buffer overflow": "#8983bf",
  "Vul-4 Global buffer overflow": "#32b897",
  "Vul-5 Read memory access": "#bb9727",
  "Vul-6 Write memory access": "#86909c",
  "Vul-7 Direct Leak": "#c76da2",
  "Vul-15 Runtime Error": "#8a31cc",
  Unknown: "#f27970",
};

const initChart = () => {
  const chart = new Chart({
    container: "container",
    height: 500,
    width: 1400,
    inset: 20,
    legend: {
      color: {
        itemMarker: (v) => vulTypeShapeMap[v],
        itemMarkerFill: (v) => vulTypeColorMap[v.id],
        itemMarkerFillOpacity: 1,
        itemMarkerStroke: (v) => vulTypeColorMap[v.id],
        itemMarkerStrokeOpacity: 1,
        itemMarkerSize: 12,
        itemLabelFontSize: 14,
      },
      layout: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      },
    },
  });

  chart.theme({ type: "academy" });
  return chart;
};

const addFuncLine = (chart, funcBeginLoc, funcName) => {
  chart
    .lineX()
    .data([funcBeginLoc])
    .style("stroke", "gray")
    .style("strokeOpacity", 1)
    .style("lineWidth", 3)
    .style("lineDash", [3, 3])
    .label({
      text: funcName,
      position: "top-left",
      textBaseline: "bottom",
      fontSize: 16,
    });
};

const renderData = (chart, debLinesList, crash_info, specialFuncs) => {
  chart
    .point()
    .data(debLinesList)
    .transform({ type: "sortY" })
    .transform({ type: "sortX" })
    .axis("x", {
      title: "Line Number",
      titleFontSize: 18,
      labelFontSize: 16,
      labelFill: "gray",
    })
    .axis("y", {
      title: "Debloating Tools",
      titleFontSize: 18,
      labelFontSize: 16,
      labelFontWeight: 600,
    })
    .encode("x", "deb_line")
    .encode("y", "deb_tool")
    .encode("shape", "line")
    .encode("color", "#98afde")
    .encode("size", 15)
    .scale("x", { type: "point" })
    .scale("y", { zero: true });

  chart
    .point()
    .data(crash_info)
    .encode("x", "crash_loc")
    .encode("y", "deb_tool")
    .encode("size", 7)
    // .legend("shape", false)
    .style("fill", (d) => vulTypeColorMap[d.vul_type])
    .style("stroke", (d) => vulTypeColorMap[d.vul_type])
    .encode("shape", "vul_type")
    .scale("shape", {
      range: [
        "square",
        "triangle",
        "triangleDown",
        "hexagon",
        "point",
        "diamond",
        "cross",
        "bowtie",
        "plus",
      ],
    });

  specialFuncs.map((func) => {
    addFuncLine(chart, func.beginLoc, func.name);
  });
};

export default { initChart, renderData };
