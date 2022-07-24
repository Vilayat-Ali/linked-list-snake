// Libraries
import { Fragment, useState } from "react";

// ui

// importing components
import Sidebar from "../../components/Sidebar/PlayZoneSideBar";
import MoveSideBar from "../../components/Sidebar/MoveSideBar";
import PlayZone from "../../components/PlayZone";

type Props = {};

const Playground = (props: Props) => {
  // game state
  const [isGamePaused, pauseGame]: [boolean, any] = useState<boolean>(true);
  const [snakeSpeed, setSnakeSpeed]: [number, any] = useState<number>(1000);
  const [snakeColor, setSnakeColor]: [string, any] = useState<string>("");
  const [score, changeScore]: [number, any] = useState<number>(0);
  return (
    <Fragment>
      {window.innerWidth > 700 ? (
        <div className="flex items-center">
          <div className="d-flex">
            <Sidebar
              isGamePaused={isGamePaused}
              pauseGameFunc={pauseGame}
              snakeSpeedFunc={setSnakeSpeed}
              snakeColorFunc={setSnakeColor}
            />
          </div>
          <div className="d-flex ">
            <PlayZone
              isGamePaused={isGamePaused}
              snakeSpeed={snakeSpeed}
              snakeColor={snakeColor}
            />
          </div>
          <div className="d-flex">
            <MoveSideBar
              moveList={[
                {
                  x: 4,
                  y: 4,
                },
                {
                  x: 5,
                  y: 4,
                },

                {
                  x: 6,
                  y: 4,
                },
              ]}
            />
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
