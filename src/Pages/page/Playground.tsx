// Libraries
import { Fragment, useEffect, useState } from "react";
import randomGen from "../../game/randomGen";

// ui

// importing components
import Sidebar from "../../components/Sidebar/PlayZoneSideBar";
import MoveSideBar from "../../components/Sidebar/MoveSideBar";
import PlayZone from "../../components/PlayZone";

// importing hooks
import useWindow from "../../hooks/useWindow";

// types

// move bar
export type Tag = {
  message: string;
  type: string;
};

type Props = {};

const Playground = (props: Props) => {
  // game state
  const [isGamePaused, pauseGame]: [boolean, any] = useState<boolean>(true);
  const [snakeSpeed, setSnakeSpeed]: [number, any] = useState<number>(1000);
  const [snakeColor, setSnakeColor]: [string, any] = useState<string>("");
  const [score, setScore]: [number, any] = useState<number>(0);
  const [moveList, setMoveList]: [Tag[], any] = useState<Tag[]>([]);
  const [showCoord, setShowingCoord]: [boolean, any] = useState<boolean>(false);

  // use window hook
  const windowWidth = useWindow();

  return (
    <Fragment>
      {windowWidth > 700 ? (
        <div className="flex items-center">
          <div className="d-flex">
            <Sidebar
              isGamePaused={isGamePaused}
              gameScore={score}
              pauseGameFunc={pauseGame}
              snakeSpeedFunc={setSnakeSpeed}
              snakeColorFunc={setSnakeColor}
              showCoordFunc={setShowingCoord}
              showCoord={showCoord}
            />
          </div>
          <div className="d-flex ">
            <PlayZone
              isGamePaused={isGamePaused}
              scoreFunc={setScore}
              snakeSpeed={snakeSpeed}
              snakeColor={snakeColor}
              tagListFunc={setMoveList}
              tagList={moveList}
              showCoord={showCoord}
            />
          </div>
          <div className="d-flex">
            <MoveSideBar tagList={moveList} />
          </div>
        </div>
      ) : (
        <section
          className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100"
          style={{ width: "100vw", height: "86vh" }}
        >
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
            <p className="text-3xl">
              Please use a desktop device to view playground.
            </p>
            <a
              rel="noopener noreferrer"
              href="/home"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Revert back to home
            </a>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Playground;
