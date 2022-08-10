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

  // locate snake
  const isSnakeThere = (x: number, y: number) => {
    var start = snakeState.head;
    while (start.next !== null) {
      if (start.data.x === x && start.data.y === y) {
        console.log(`Snake at ${start.data.x}, ${start.data.y}`);
        return true;
      }
      start = start.next;
    }
    if (start.data.x === x && start.data.y === y) {
      console.log(`Snake at ${start.data.x}, ${start.data.y}`);
      return true;
    }
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
        }
        break;
      case "ArrowRight":
      case 0:
        changeSnakeDirection(1);
        break;
      case 1:
        changeSnakeDirection(1);
        break;
      case 2:
        changeSnakeDirection(0);
        break;
      case 3:
        changeSnakeDirection(1);
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
    if (targetCoord.x === 0 || targetCoord.y === 0) return true; // false meaning to stop
  };

  // moving snake forward
  const moveSnakeForward = () => {
    switch (snakeDirection) {
      case 0:
        // move snake up
        var targetCoord = {
          x: snakeState.head.data.x - 1,
          y: snakeState.head.data.y,
        };
        if (!snakeAtBoundary(targetCoord)) {
          console.log(
            "Previous : ",
            snakeState.head.data.x,
            ", ",
            snakeState.head.data.y
          );
          console.log("Target: ", targetCoord);
          var newSnakeState = snakeMotionMechanics(snakeState, targetCoord);
          setSnakeState(newSnakeState);
          console.log(
            "New State : ",
            snakeState.head.data.x,
            ", ",
            snakeState.head.data.y
          );
        }

        break;
      case 1:
        // move snake down
        var targetCoord = {
          x: snakeState.head.data.x + 1,
          y: snakeState.head.data.y,
        };
        var newSnakeState = snakeMotionMechanics(snakeState, targetCoord);
        setSnakeState(newSnakeState);
        break;
      case 2:
        // move snake left
        var targetCoord = {
          x: snakeState.head.data.x,
          y: snakeState.head.data.y - 1,
        };
        var newSnakeState = snakeMotionMechanics(snakeState, targetCoord);
        setSnakeState(newSnakeState);
        break;
      case 3:
        // move snake right
        var targetCoord = {
          x: snakeState.head.data.x,
          y: snakeState.head.data.y + 1,
        };
        var newSnakeState = snakeMotionMechanics(snakeState, targetCoord);
        setSnakeState(newSnakeState);
        break;
    }
  };

  // moving snake forward
  useEffect(() => {
    // setting interval
    const intervalId = setInterval(() => {
      moveSnakeForward();
    }, 2500);
    return () => clearInterval(intervalId);
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
                  : isSnakeThere(rowId, cellId)
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
