import React, { useMemo } from "react";

import "./barchart.css";

const Bar = ({ name, color, height, ticketCount }) => (
  <div className="bar" style={{ backgroundColor: color, height: `${height}%` }}>
    <div className="tooltip">
      {name} - {ticketCount}
    </div>
  </div>
);

const BarChart = ({ data }) => {
  const maxTicketCount = useMemo(() => {
    return Math.max(...data.map((item) => item.ticketCount));
  }, []);

  return (
    <div className="chart-container">
      <div className="chart">
        {data.map((item) => (
          <Bar
            key={item.id}
            {...item}
            height={(item.ticketCount / maxTicketCount) * 100}
          />
        ))}
      </div>
      <div className="y-axis-label">Number of tickets</div>
      <div className="x-axis-label">Departments</div>
    </div>
  );
};

export default BarChart;
