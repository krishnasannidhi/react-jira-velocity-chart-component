import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";

function App() {
  const [showChart, setShowChart] = useState(false);
  return (
    <div className="container">
      <h1 className="title">JIRA Velocity Chart Component</h1>
      <button onClick={() => setShowChart(!showChart)}>Toggle Chart</button>
      {showChart && <BarChart />}
    </div>
  );
}

export default App;
