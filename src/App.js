import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import { CHART_DATA } from "./data/chart";

function App() {
  const [showChart, setShowChart] = useState(true);
  return (
    <div className="container">
      <h1 className="title">JIRA Velocity Chart Component</h1>
      <button onClick={() => setShowChart(!showChart)}>Toggle Chart</button>
      {showChart && <BarChart data={CHART_DATA} />}
    </div>
  );
}

export default App;
