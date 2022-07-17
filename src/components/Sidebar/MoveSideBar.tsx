// importing react hooks
import { useState } from "react";
import { Badge, Stack } from "@chakra-ui/react";

type Props = {};

export interface coordinate {
  x: Number;
  y: Number;
}

// function to return types of badges
const giveBadge = (message: string, type: string): any => {
  switch (type) {
    case "move":
      return <Badge colorScheme="green">{message}</Badge>;
    case "danger":
      return <Badge colorScheme="red">{message}</Badge>;
    case "special":
      return <Badge colorScheme="purple">{message}</Badge>;
    case "default":
      return <Badge>{message}</Badge>;
    default:
      console.error("Error: Give wrong batch type");
  }
};

const MoveSideBar = (props: Props) => {
  // state
  const [isMoveSideBarOpen, setMoveSideBarStatus] = useState<Boolean>(
    window.innerWidth < 600 ? false : true
  );
  //     {
  //         x: x_coordinate,
  //         y: y_coordinate
  //     }
  const [moveList, setMoveList] = useState<coordinate[]>([]);

  return (
    <aside
      className={
        isMoveSideBarOpen
          ? "w-64 bg-gray-50 shadow flex items-end justify-center"
          : "hidden"
      }
      aria-label="MoveSideBar"
      style={{ height: "77vh" }}
    >
      <div className="overflow-y-auto py-4 px-3">
        <Stack direction="column">
          {moveList.map((move: coordinate, index: any): any =>
            giveBadge(
              `SNAKE HEAD AT CO_ORD: (${move.x.toString()}, ${move.y.toString()})`,
              "success"
            )
          )}
        </Stack>
      </div>
    </aside>
  );
};

export default MoveSideBar;
