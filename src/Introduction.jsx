import React from "react";

function Introduction() {
  return (
    <div className="introduction">
      <h1>Welcome to Conway's Game of Life</h1>

      <h3>What is it?</h3>
      <p>
        This is a simulation that shows how populations can change over time.
        Cells on a grid live or die based on simple rules.
      </p>

      <h3>Rules:</h3>
      <ul>
        <li>A live cell with fewer than two live neighbors dies.</li>
        <li>A live cell with two or three live neighbors stays alive.</li>
        <li>A live cell with more than three live neighbors dies.</li>
        <li>A dead cell with exactly three live neighbors becomes alive.</li>
      </ul>

      <h3>Colors:</h3>
      <p>A live cell is black. A dead cell is white.</p>

      <h3>How to Play:</h3>
      <p>
        Click a cell to change its state from live to dead or vice versa. Set
        the grid size between 3 and 40 rows and columns. Click "Submit" to see
        the changes.
      </p>

      <h3>Heatmap:</h3>
      <p>
        The heatmap shows how long ago cells were alive. Black cells are
        currently alive. The closer to white a cell is, the longer it has been
        dead.
      </p>

      <p>Try it out and see how the cells evolve over time!</p>
    </div>
  );
}

export default Introduction;
