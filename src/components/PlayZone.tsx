// importing libaries
import { useState, useEffect, useCallback, useRef } from "react";

// importing configs
import config from "../config/app.config";
import generateRandom from "../game/randomGen";

// importing game elements
import Snake from "../game/snake";
import spawnFood from "../game/food";

type Props = {};

const PlayZone = (props: Props) => {
  // state
  const [matrixSize, changeMatrixSize] = useState<number[] | null>(
    window.innerWidth < 600 ? null : config.playgroundSize // [ row, column]
  );
  // snake direction
  /// initial direction is straight upward direction
  const [snakeHeadCoord, setSnakeHeadCoord]: [number[], any] = useState<
    number[]
  >([
    generateRandom(0, config.playgroundSize[0]),
    generateRandom(0, config.playgroundSize[1]),
  ]); // [x,y]
  const [snakeDirection, changeSnakeDirection]: [number, any] =
    useState<number>(2); // 0 -> UP 1-> DOWN 2-> LEFT 3-> RIGHT

  // food
  const [food, newFoodLocation]: [
    { x: number; y: number; color: string },
    any
  ] = useState<{ x: number; y: number; color: string }>({
    x: spawnFood().coord.x,
    y: spawnFood().coord.y,
    color: spawnFood().color,
  });

  // refs
  const snakeRef = useRef<any>();
  const foodRef = useRef<any>();
  const boxRef = useRef<any>();

  // user controls
  /// function to handle event
  const handleKey = useCallback((event: any): void => {
    switch (event.key) {
      case "ArrowLeft":
        console.log("LEFT");
        break;
      case "ArrowRight":
        console.log("Right");
        break;
      default:
        console.log("Invalid control");
    }
  }, []);

  // useEffect
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // making things go visible
  useEffect(() => {
    // food
    foodRef.current.style.backgroundColor = food.color;
    // snake
    snakeRef.current.style.backgroundColor = "green";
    // box
    boxRef.current.style.backgroundColor = "";
  });

  // moving snake
  useEffect(() => {
    switch (snakeDirection) {
      case 0:
        // UP
        setTimeout(() => {
          setSnakeHeadCoord([snakeHeadCoord[0] - 1, snakeHeadCoord[1]]);
        }, 2000);
        break;
      case 1:
        // DOWN
        setTimeout(() => {
          setSnakeHeadCoord([snakeHeadCoord[0] + 1, snakeHeadCoord[1]]);
        }, 2000);
        break;
      case 2:
        // LEFT
        setTimeout(() => {
          setSnakeHeadCoord([snakeHeadCoord[0], snakeHeadCoord[1] - 1]);
        }, 2000);
        break;
      case 3:
        // RIGHT
        setTimeout(() => {
          setSnakeHeadCoord([snakeHeadCoord[0], snakeHeadCoord[1] + 1]);
        }, 2000);
        break;
    }
  });

  return (
    <div style={{ margin: "1vh auto border border-sky-500" }} className="ml-4">
      {[...Array(matrixSize![0])].map((_row, rowId) => (
        <div className="flex" key={rowId}>
          {[...Array(matrixSize![1])].map((_cell, cellId) => (
            <div
              className="w-10 h-10 border border-sky-500"
              key={cellId}
              ref={
                rowId === snakeHeadCoord[0] && cellId === snakeHeadCoord[1]
                  ? snakeRef
                  : rowId === food.x && cellId === food.y
                  ? foodRef
                  : boxRef
              }
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlayZone;
