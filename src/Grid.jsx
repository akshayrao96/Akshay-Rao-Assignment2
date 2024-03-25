import React, { useState } from "react";
import Cell from "./Cell";
import Counter from "./Counter";
import "./Grid.css";
import "./Introduction.css";
import "./Credits.css";

function Grid() {
  let gridDefaultSize = 20;

  const [inputRows, setInputRows] = useState(gridDefaultSize);
  const [inputCols, setInputCols] = useState(gridDefaultSize);

  const [error, setError] = useState("");
  const [heatmapMode, setHeatmapMode] = useState(false);

  const generateGrid = (rows, cols) => {
    let grid = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push(Math.random() < 0.1);
      }
      grid.push(row);
    }
    return grid;
  };

  const [grid, setGrid] = useState(
    generateGrid(gridDefaultSize, gridDefaultSize)
  );

  const toggleHeatmapMode = () => {
    setHeatmapMode((prevMode) => !prevMode);
  };

  const handleClickCell = (rowIndex, colIndex) => {
    let newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      let newRow = [];
      for (let j = 0; j < grid[i].length; j++) {
        if (i === rowIndex && j === colIndex) {
          newRow.push(!grid[i][j]);
        } else {
          newRow.push(grid[i][j]);
        }
      }
      newGrid.push(newRow);
    }
    setGrid(newGrid);
  };

  const countAliveCells = () => {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j]) count++;
      }
    }
    return count;
  };

  const getNextGrid = (currentGrid) => {
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    const rows = currentGrid.length;
    const cols = currentGrid[0].length;

    let nextGrid = [];
    for (let row = 0; row < rows; row++) {
      nextGrid[row] = [];
      for (let col = 0; col < cols; col++) {
        nextGrid[row][col] = currentGrid[row][col];
      }
    }

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let alive = 0;
        for (let dir of directions) {
          if (row + dir[0] < 0 || row + dir[0] >= inputRows) continue;
          if (col + dir[1] < 0 || col + dir[1] >= inputCols) continue;
          if (currentGrid[row + dir[0]][col + dir[1]]) {
            alive++;
          }
        }
        if (currentGrid[row][col]) {
          if (alive > 3 || alive < 2) {
            nextGrid[row][col] = false;
          }
        } else {
          if (alive === 3) {
            nextGrid[row][col] = true;
          }
        }
      }
    }
    return nextGrid;
  };

  const simulateNext = () => {
    setGrid((prevGrid) => getNextGrid(prevGrid));
  };

  const resetGrid = () => {
    setGrid(generateGrid(gridDefaultSize, gridDefaultSize));
  };

  const updateGridDimensions = (cols) => {
    const gridTemplateColumns = `repeat(${cols}, 20px)`;
    setGridTemplateColumns(gridTemplateColumns);
  };

  const updateGrid = () => {
    if (inputRows < 3 || inputRows > 40 || inputCols < 3 || inputCols > 40) {
      setError(
        "Invalid values! Please enter a value between 3 and 40 (inclusive) for both row and columns!"
      );
      return;
    }
    setError("");
    const newGrid = generateGrid(inputRows, inputCols);
    setGrid(newGrid);
    updateGridDimensions(inputCols);
  };

  const buildGridElements = () => {
    let gridElements = [];
    for (let row = 0; row < grid.length; row++) {
      let rowElements = [];
      for (let col = 0; col < grid[row].length; col++) {
        rowElements.push(
          <Cell
            key={`${row}-${col}`}
            alive={grid[row][col]}
            onClick={() => handleClickCell(row, col)}
          />
        );
      }
      gridElements.push(
        <div key={row} className="grid-row">
          {rowElements}
        </div>
      );
    }
    return gridElements;
  };

  return (
    <div>
      <div className="container-1">
        <p className="prompt-grid-dimensions">Enter grid dimensions</p>
        <input
          type="number"
          value={inputRows}
          onChange={(e) => setInputRows(parseInt(e.target.value) || 0)}
        />
        <input
          type="number"
          value={inputCols}
          onChange={(e) => setInputCols(parseInt(e.target.value) || 0)}
        />
        <button onClick={updateGrid}>Submit</button>
        {error && <div>{error}</div>}
      </div>
      <Counter count={countAliveCells()} />

      <div className="container">{buildGridElements()}</div>
      <div className="container-2">
        <button className="button" onClick={simulateNext}>
          Next
        </button>
        <button className="button" onClick={resetGrid}>
          Reset
        </button>
        <button className="button" onClick={toggleHeatmapMode}>
          Heatmap
        </button>
      </div>
    </div>
  );
}

export default Grid;
