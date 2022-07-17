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

  const [snakeDirection, setSnakeDirection] = useState<string | null>(null);

  // snake instance
  const play = () => {
    var snake: Snake = new Snake();
    snake.growSnake({ x: 1, y: 2 });
    snake.growSnake({ x: 2, y: 2 });
    const p: number[][] = parseSnake(snake);
    console.log(p);
  };

  // parser function
  const parseSnake = (snakeInstance: Snake): number[][] => {
    var parsedSnakeArr: number[][] = [];
    if (snakeInstance.size) {
      var start = snakeInstance.head;
      while (start.next != null) {
        console.log(start.data);
        parsedSnakeArr.push([start.data.x, start.data.y]); // making the parsed snake array
        start = start.next;
      }
      console.log(start.data);
      parsedSnakeArr.push([start.data.x, start.data.y]); // making the parsed snake array
    }
    return parsedSnakeArr;
  };

  useEffect(() => {
    play();
  });

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
