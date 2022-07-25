// importing libaries
import { useState, useEffect, useCallback, useRef } from "react";
import Snake from "../game/snake";
import parser from "../mechanics/Parser";
import snakeMotionMechanics from "../mechanics/snakeMotionMechanics";

// importing configs
import config from "../config/app.config";
import generateRandom from "../game/randomGen";

// importing game elements
import spawnFood from "../game/food";

type Props = {
  isGamePaused: boolean;
  snakeSpeed: number;
  snakeColor: string;
};

const PlayZone = (props: Props) => {
  // state
  const [matrixSize, changeMatrixSize] = useState<number[] | null>(
    window.innerWidth < 600 ? null : config.playgroundSize // [ row, column]
  );
  /// snake state
  const [snakeState, setSnakeState]: [Snake, any] = useState<Snake>(
    new Snake()
  );
  // grow snake in the UI
  const growSnakeUI = (coord: { x: number; y: number }): void => {
    setSnakeState(() => {
      let newSnakeState = snakeState.growSnake(coord);
      return newSnakeState;
    });
  };
  const [snakeSignature, setSnakeSignature]: [number[][], any] = useState<
    number[][]
  >([]);
  // update parsed snake array
  useEffect(() => {
    setSnakeSignature(parser(snakeState));
  }, [snakeState]);
  // snake direction
  /// initial direction is straight upward direction
  const [snakeDirection, changeSnakeDirection]: [number, any] =
    useState<number>(0); // 0 -> UP 1-> DOWN 2-> LEFT 3-> RIGHT

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
        switch (snakeDirection) {
          case 0:
            changeSnakeDirection(2);
            break;
          case 1:
            changeSnakeDirection(2);
            break;
          case 2:
            changeSnakeDirection(1);
            break;
          case 3:
            changeSnakeDirection(0);
            break;
          default:
            break;
        }
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
    if (!props.isGamePaused) {
      switch (snakeDirection) {
        case 0:
          // UP
          setTimeout(() => {
            setSnakeState(() =>
              snakeMotionMechanics(snakeState, {
                x: snakeState.head.data.x - 1,
                y: snakeState.head.data.y,
              })
            );
          }, props.snakeSpeed);
          break;
        case 1:
          // DOWN
          break;
        case 2:
          // LEFT
          break;
        case 3:
          // RIGHT
          break;
      }
    }
  });

  return (
    <div style={{ margin: "1vh auto " }} className="ml-4 border border-sky-500">
      {[...Array(matrixSize![0])].map((_row, rowId) => (
        <div className="flex" key={rowId}>
          {[...Array(matrixSize![1])].map((_cell, cellId) => (
            <div
              className="w-10 h-10 border border-sky-500"
              key={cellId}
              ref={
                //  snakeState rowId === snakeHeadCoord[0] && cellId === snakeHeadCoord[1]
                snakeSignature.indexOf([rowId, cellId]) !== -1
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
