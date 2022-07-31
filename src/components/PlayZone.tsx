// importing libaries
import { useState, useEffect, useCallback, useRef } from "react";
import Snake from "../game/snake";
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
  // snake signature
  const [snakeSignature, setSnakeSignature]: [number[][], any] = useState<
    number[][]
  >(parser(snakeState));
  const existsInSnakeSignature = (search: number) => {
    return snakeSignature.some((signatureCell) =>
      signatureCell.includes(search)
    );
  };

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

  // game start useEffect
  // useEffect(() => {
  //   // spawn food and display it to moveSideBar
  //   spawnFoodInPlayZone();
  // }, []);

  useEffect(() => {
    console.log(parser(snakeState));
    console.log(snakeSignature.includes([]));
  }, []);

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
    snakeRef.current.style.backgroundColor = "pink";
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
                  : existsInSnakeSignature(rowId) &&
                    existsInSnakeSignature(cellId)
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
