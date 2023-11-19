import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Income", { role: "style" }],
  ["18 Sep, 2023", 17.7, "#E5FAFC"], 
  ["", 18.1, "#A0C0D7"], 
  ["", 18.6, "#43597D"], 
  ["", 19, "DE7456"],
  ["18 Oct, 2023", 17.5, "#E5FAFC"],
  ["", 18.0, "#A0C0D7"], 
  ["", 18.7, "#43597D"], 
  ["", 18.9, "DE7456"],
  ["18 Dec, 2023", 17.7, "#E5FAFC"], 
  ["", 18.1, "#A0C0D7"], 
  ["", 18.6, "#43597D"], 
  ["", 18, "DE7456"],
];

const options = {
  width: 800,
  height: 400,
  backgroundColor: 'none',
  legendTextStyle: { color: '#FFF' },
  titleTextStyle: { color: '#FFF' },
  hAxis: {
    textStyle:{color: '#FFF'}
  },
  vAxis: {
    textStyle:{color: '#FFF'}
  },
};

export function BarChart() {
  return (
    <Chart chartType="ColumnChart" options={options} data={data} />
  );
}