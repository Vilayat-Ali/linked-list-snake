// importing react hooks
import { useState } from "react";
import { Badge, Stack } from "@chakra-ui/react";

type Props = {
  moveList: { x: number; y: number }[];
};

export interface coordinate {
  x: Number;
  y: Number;
}

// function to return types of badges
const giveBadge = (message: string, type: string, key: any): any => {
  switch (type) {
    case "move":
      return (
        <Badge colorScheme="green" key={key}>
          {message}
        </Badge>
      );
    case "danger":
      return (
        <Badge colorScheme="red" key={key}>
          {message}
        </Badge>
      );
    case "special":
      return (
        <Badge colorScheme="purple" key={key}>
          {message}
        </Badge>
      );
    case "default":
      return <Badge key={key}>{message}</Badge>;
    default:
      console.error("Error: Give wrong batch type");
  }
};

const MoveSideBar = (props: Props) => {
  // state
  const [isMoveSideBarOpen, setMoveSideBarStatus] = useState<Boolean>(
    window.innerWidth < 600 ? false : true
  );

  return (
    <aside
      className={
        isMoveSideBarOpen
          ? "bg-gray-50 shadow flex items-end justify-center"
          : "hidden"
      }
      aria-label="MoveSideBar"
      style={{ width: "18vw", height: "80vh", overflowY: "scroll" }}
    >
      <div className="overflow-y-auto py-4 px-3">
        <Stack direction="column">
          {props.moveList.map((move: coordinate, index: any): any =>
            giveBadge(
              `SNAKE HEAD AT CO_ORD: (${move.x.toString()}, ${move.y.toString()})`,
              "move",
              index
            )
          )}
        </Stack>
      </div>
    </aside>
  );
};

export default MoveSideBar;
