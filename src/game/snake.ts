import generateRandom from "./randomGen";
import config from "../config/app.config";

// coord type
export type coordType = {
  x: number;
  y: number;
};

// single linkedlist node
export class linkedNode {
  // data member
  data: coordType;
  next: linkedNode | null;
  // constructor
  constructor(data: coordType, next: linkedNode | null = null) {
    this.data = data;
    this.next = next;
  }
}

// snake linked list
class Snake {
  // data members
  head: linkedNode;
  size: number;
  // constructor
  constructor() {
    this.head = new linkedNode({
      // generate spawing location
      x: generateRandom(0, config.playgroundSize[0]),
      y: generateRandom(0, config.playgroundSize[1]),
    });
    this.size = 1;
  }
  // grow snake
  growSnake(data: coordType) {
    // new node instance
    let newNode: linkedNode = new linkedNode(data);
    // traversing to the tail
    let start = this.head;
    while (start.next !== null) {
      start = start.next;
    }
    // appending node and incrementing size
    start.next = newNode;
    this.size++;
  }
  // reversing the snake
  reverse() {}
}

export default Snake;
