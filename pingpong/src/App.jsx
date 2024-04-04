import { useState } from "react";
import "./App.css";

function App() {
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);

  const handleLeftCount = () => {
    setLeftCount(leftCount + 1);
  };

  const handleRightCount = () => {
    setRightCount(rightCount + 1);
  };
  return (
    <div id="container">
      <div className="box leftbox" onClick={handleLeftCount}>
        <p className="score">{leftCount}</p>
      </div>

      <div className="box rightbox" onClick={handleRightCount}>
        <p className="score">{rightCount}</p>
      </div>
    </div>
  );
}

export default App;
