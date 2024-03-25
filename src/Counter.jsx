import React from "react";
import "./Counter.css";

function Counter({ count }) {
  return <div className="counter">Alive Cells: {count}</div>;
}

export default Counter;
