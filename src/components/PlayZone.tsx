// importing libaries
import { useState, useEffect, useCallback, useRef } from "react";
import Snake, { coordType, linkedNode } from "../game/snake";
import parser from "../mechanics/Parser";
import snakeMotionMechanics from "../mechanics/snakeMotionMechanics";

// importing configs
import config from "../config/app.config";

// importing game elements
import spawnFood from "../game/food";

// importing types
import type { Tag } from "../Pages/page/Playground";

type Props = {
  isGamePaused: boolean;
  scoreFunc: any;
  snakeSpeed: number;
  snakeColor: string;
  tagListFunc: any;
  tagList: Tag[];
  showCoord: boolean;
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

  // snake direction
  /// initial direction is straight upward direction
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

  // food spawn message
  useEffect(() => {
    // send message
    props.tagListFunc(() => {
      props.tagList.push({
        message: `Food spawn Coord : (${food.x}, ${food.y})`,
        type: "special",
      });
      return Array.from(new Set(props.tagList));
    });
  }, []);

  const spawnFoodInPlayZone = () => {
    // spawn food
    newFoodLocation({
      x: spawnFood().coord.x,
      y: spawnFood().coord.y,
      color: spawnFood().color,
    });
    // send message
    props.tagListFunc(() => {
      props.tagList.push({
        message: `Food spawn Coord : (${food.x}, ${food.y})`,
        type: "special",
      });
      return Array.from(new Set(props.tagList));
    });
  };

  // refs
  const snakeRef = useRef<any>();
  const foodRef = useRef<any>();
  const boxRef = useRef<any>();

  // user controls
  /// function to handle event
  const handleKey = useCallback((event: any): void => {
    switch (event.key) {
      // LEFT
      case "ArrowLeft":
        changeSnakeDirection(2);
        console.log(snakeDirection);
        console.log("LEFT");
        break;
      // RIGHT
      case "ArrowRight":
        break;
    }
  }, []);

  // useEffect
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // boundary check
  const snakeAtBoundary = (targetCoord: { x: number; y: number }) => {
    if (targetCoord.x === 0 || targetCoord.y === 0) return true; // false // meaning to stop
  };

  // moving snake forward
  useEffect(() => {
    // setting up interval
    const snakeMovementInterval = setInterval(() => {
      switch (snakeDirection) {
        case 0:
          // fetch new target coord
          let targetCoord_UP: coordType = {
            x: snakeState.head.data.x - 1,
            y: snakeState.head.data.y,
          };
          // updating snake motion states
          snakeMotionMechanics(snakeState, targetCoord_UP);
          break;
        case 1:
          // fetch new target coord
          let targetCoord_DOWN: coordType = {
            x: snakeState.head.data.x + 1,
            y: snakeState.head.data.y,
          };
          // updating snake motion states
          snakeMotionMechanics(snakeState, targetCoord_DOWN);
          break;
        case 2:
          // fetch new target coord
          let targetCoord_LEFT: coordType = {
            x: snakeState.head.data.x,
            y: snakeState.head.data.y - 1,
          };
          // updating snake motion states
          snakeMotionMechanics(snakeState, targetCoord_LEFT);
          break;
        case 3:
          // fetch new target coord
          let targetCoord_RIGHT: coordType = {
            x: snakeState.head.data.x,
            y: snakeState.head.data.y + 1,
          };
          // updating snake motion states
          snakeMotionMechanics(snakeState, targetCoord_RIGHT);
          break;
      }
    }, 600); // 500 is test default
    // removing interval to prevent memmory leak
    return () => clearInterval(snakeMovementInterval);
  }, []);

  // making things go visible
  useEffect(() => {
    // food
    foodRef.current.style.backgroundColor = food.color;
    // snake
    snakeRef.current.style.backgroundColor = props.snakeColor || "#000000";
    // box
    boxRef.current.style.backgroundColor = "";
  });

  return (
    <div
      style={{ margin: "1vh auto " }}
      className="ml-4 border border-sky-500 text-center"
    >
      {[...Array(matrixSize![0])].map((_row, rowId) => (
        <div className="flex" key={rowId}>
          {[...Array(matrixSize![1])].map((_cell, cellId) => (
            <div
              className="w-10 h-10 border border-sky-500"
              key={cellId}
              ref={
                food.x == rowId && food.y == cellId
                  ? foodRef
                  : snakeState.head.data.x === rowId &&
                    snakeState.head.data.y === cellId
                  ? snakeRef
                  : boxRef
              }
            >
              {props.showCoord ? `${rowId},${cellId}` : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlayZone;
