// importing libaries
import { useState } from "react";

type Props = {};

// snake

const PlayZone = (props: Props) => {
  // state
  const [matrixSize, changeMatrixSize] = useState<number[]>(
    window.innerWidth < 600 ? [9, 9] : [14, 25] // [ row, column]
  );

  return (
    <div style={{ margin: "1vh auto border border-sky-500" }}>
      {[...Array(matrixSize[0])].map((_row, rowId) => (
        <div className="flex" key={rowId}>
          {[...Array(matrixSize[1])].map((_cell, cellId) => (
            <div className="w-10 h-10 border border-sky-500" key={cellId}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlayZone;
