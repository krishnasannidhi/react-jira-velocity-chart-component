import React from "react";

import './barchart.css'

const BarChart = ({ data }) => {
  return (
    <div className="chart-container">
      <div className="chart"></div>
      <div className="y-axis-label">Number of tickets</div>
      <div className="x-axis-label">Departments</div>
    </div>
  );
};

export default BarChart;
