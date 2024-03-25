import { useState } from "react";

function GridDimension(defaultSize) {
  const [dimensions, setDimensions] = useState({
    rows: defaultSize,
    cols: defaultSize,
  });

  const updateDimensions = (rows, cols) => {
    setDimensions({ rows, cols });
  };

  return [dimensions, updateDimensions];
}

export default GridDimension;
