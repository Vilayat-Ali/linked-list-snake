// importing libaries
import { useState, useEffect } from "react";

// importing configs
import config from "../config/app.config";

// importing snake
import Snake, { linkedNode } from "../game/snake";
import Parse from "../mechanics/Parser";

type Props = {};

const PlayZone = (props: Props) => {
  // state
  const [matrixSize, changeMatrixSize] = useState<number[] | null>(
    window.innerWidth < 600 ? null : config.playgroundSize // [ row, column]
  );
  const [snakeInstance, modifySnakeInstance] = useState<Snake>(new Snake()); // new snake instance
  const [snakeDirection, setSnakeDirection] = useState<string | null>(null); // left or right
  const [snakeMotionAxis, setSnakeMotionAxis] = useState<number>(0); // 0 for x and 1 for y

  // useEffect
  useEffect(() => {
    console.log(Parse(snakeInstance));
  }, []);

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
