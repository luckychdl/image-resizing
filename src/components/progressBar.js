import React from "react";
import { useEffect } from "react";
import "../styles/progressBar.css";
const ProgressBar = () => {
  let percent = 30;
  useEffect(() => {
    setTimeout(() => {
      if (percent !== 100) percent += 1;
    }, 1000);
  }, [percent]);
  return (
    <div className="progress-bar-boundary">
      <div style={{ width: `${percent}%` }}>{percent}%</div>
    </div>
  );
};
export default ProgressBar;
