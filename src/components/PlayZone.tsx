// importing libaries
import { useState } from "react";

type Props = {};

// snake

// single linkedlist node
class linkedNode {
  data: { x: number; y: number };
  next: linkedNode | null;
  constructor(data: { x: number; y: number }, next: null) {
    this.data = data;
    this.next = next;
  }
}

// snake linked list
class Snake {
  head: linkedNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

const PlayZone = (props: Props) => {
  // state
  const [matrixSize, changeMatrixSize] = useState<number[]>(
    window.innerWidth < 600 ? [9, 9] : [14, 25] // [ row, column]
  );

  return (
    <div style={{ margin: "1vh auto border border-sky-500" }}>
      {[...Array(matrixSize[0])].map((_row, rowId) => (
        <div className="flex" key={rowId}>
          {[...Array(matrixSize[1])].map((_cell, cellId) => (
            <div className="w-10 h-10 border border-sky-500" key={cellId}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlayZone;
