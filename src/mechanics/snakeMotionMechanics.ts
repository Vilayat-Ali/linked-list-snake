// Imports
import { coordType, linkedNode } from "../game/snake";
import Snake from "../game/snake";

// Function for snake motion mechancis
const snakeMotionMechanics = function (
  snake: Snake,
  newHeadCoord: coordType
): Snake {
  let currentNode: linkedNode = snake.head;
  let prevNodeCoord: coordType = currentNode.data;
  while (currentNode.next !== null) {
    // swapping contents
    let temp: coordType = currentNode.next.data;
    currentNode.next.data = prevNodeCoord;
    prevNodeCoord = temp;
    // progressing
    currentNode = currentNode.next;
  }
  // modifying head
  snake.head.data = newHeadCoord;
  // returning new linked list
  return snake;
};

// exporting default the function
export default snakeMotionMechanics;
