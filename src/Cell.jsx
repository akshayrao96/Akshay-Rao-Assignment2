import React from "react";
import "./Cell.css";

function Cell({ onClick, alive, age, heatmapMode }) {
  let cellClass = "cell" + (alive ? " cell-alive" : " cell-dead");

  if (heatmapMode) {
    const ageIndex = Math.min(Math.floor(age * 10), 9);
    cellClass = `cell heatmap-${ageIndex}`;
  }

  return <div className={cellClass} onClick={onClick}></div>;
}

export default Cell;
