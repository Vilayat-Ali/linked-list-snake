// importing react hooks
import { useState, useEffect } from "react";
import { Badge, Stack } from "@chakra-ui/react";

// impoting hooks
import useWindow from "../../hooks/useWindow";

// importing types
import type { Tag } from "../../Pages/page/Playground";

type Props = {
  tagList: Tag[];
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
  // hook
  const windowWidth = useWindow();
  // state
  const [isMoveSideBarOpen, setMoveSideBarStatus] = useState<Boolean>(
    windowWidth > 600 ? false : true
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
          {props.tagList.map((tag: any, index: any) =>
            giveBadge(tag.message, tag.type, index)
          )}
        </Stack>
      </div>
    </aside>
  );
};

export default MoveSideBar;
