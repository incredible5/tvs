import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./style.scss";

function Graph(props) {
  let { data } = props;
  data = data.map((item) => item.data);
  data.sort(
    (a, b) =>
      b[5].replace("$", "").replace(/,/g, "") -
      a[5].replace("$", "").replace(/,/g, "")
  );
  data = data.slice(0, 10);
  const options = {
    title: {
      text: "Top 10 Employee Salary",
    },
    chart: {
      type: "bar",
    },
    xAxis: {
      title: {
        text: "Employee Name",
      },
      categories: data.map((item) => item[0]),
    },
    legend: {
      layout: "vertical",
      floating: true,
      backgroundColor: "#FFFFFF",
      align: "right",
      verticalAlign: "top",
      y: 60,
      x: -60,
    },
    tooltip: {
      headerFormat: "",
      pointFormat: "{point.category}: {point.y}",
    },
    series: [
      {
        showInLegend: false,
        data: data.map((item) =>
          parseInt(item[5].replace("$", "").replace(/,/g, ""))
        ),
      },
    ],
    yAxis: {
      title: {
        text: "Salary (In USD)",
      },
    },
    credits: {
      enabled: false,
    },
  };
  return (
    <div className={"graph-component"}>
      <div className={"section"}>
        <div className={"close"} onClick={() => props.onClose(false)}>
          X
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default Graph;
