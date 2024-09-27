import React from 'react';


const CircleGrid = ({
  gridSize = 8,
  circleSize = 8,
  circleColor = '#bababa',
  highlightColor = 'green', // Color for highlighted dots
}) => {
  // Generate the grid
  const generateGrid = () => {
    const rows = [];
    for (let row = 0; row < gridSize; row++) {
      const columns = [];
      for (let col = 0; col < gridSize; col++) {
        // Determine if this dot should be highlighted
        const isHighlighted = col < 4; // First four columns are highlighted
        columns.push(
          <div
            key={`${row}-${col}`}
            className={`dot ${isHighlighted ? 'highlighted' : ''}`}
            style={{
              width: circleSize,
              height: circleSize,
              backgroundColor: isHighlighted ? highlightColor : circleColor,
            }}
          />
        );
      }
      rows.push(
        <div key={row} className="row">
          {columns}
        </div>
      );
    }
    return rows;
  };

  return <div className="grid">{generateGrid()}</div>;
};

export default CircleGrid;
