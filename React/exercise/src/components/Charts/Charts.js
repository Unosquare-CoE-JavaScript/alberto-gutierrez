import React from "react";
import "./style/Chart.css";
export function Chart({ datapoints = [] }) {
  const values = datapoints.map((item) => parseFloat(item.value));
  const max = Math.max(...values);
  console.log(max, values);
  return (
    <div className="chart">
      {datapoints.map((item) => (
        <ChartBar
          key={item.id}
          value={item.value}
          title={item.label}
          id={item.id}
          max={max}
        />
      ))}
    </div>
  );
}
function ChartBar({ value, title, max }) {
  const percent = (value / max) * 100;
  console.log(max, value);
  console.log("aqui", percent);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: `${percent}%` }}></div>
      </div>
      <div className="chart-bar__label">{title}</div>
    </div>
  );
}
