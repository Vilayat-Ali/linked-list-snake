// Imports
import { coordType, linkedNode } from "../game/snake";

// Function for snake motion mechancis
const snakeMotionMechanics = (newCoord: coordType, snakeHead: linkedNode) => {
  let prevHeadVal: coordType = snakeHead.data;
  let start: linkedNode = snakeHead;
  let tempVal: coordType | null = null;
  while (start.next !== null) {
    // next node
    start = start.next;
  }
};

export default snakeMotionMechanics;
