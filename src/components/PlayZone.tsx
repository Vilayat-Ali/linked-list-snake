// importing libaries
import { useState, useRef, useEffect } from "react";

// importing configs
import config from "../config/app.config";

// importing snake
import Snake, { linkedNode } from "../game/snake";

type Props = {};

const PlayZone = (props: Props) => {
  // state
  const [matrixSize, changeMatrixSize] = useState<number[] | null>(
    window.innerWidth < 600 ? null : config.playgroundSize // [ row, column]
  );

  const [snakeDirection, setSnakeDirection] = useState<string | null>(null); // left or right
  const [snakeMotionAxis, setSnakeMotionAxis] = useState<number>(0); // 0 for x and 1 for y

  const changeDirection = () => {};

  return (
    <div style={{ margin: "1vh auto border border-sky-500" }} className="ml-4">
      {[...Array(matrixSize![0])].map((_row, rowId) => (
        <div className="flex" key={rowId}>
          {[...Array(matrixSize![1])].map((_cell, cellId) => (
            <div className="w-10 h-10 border border-sky-500" key={cellId}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlayZone;
