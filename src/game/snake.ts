import { link } from "fs";

// single linkedlist node
class linkedNode {
  // data member
  data: { x: number; y: number };
  next: linkedNode | null;
  // constructor
  constructor(data: { x: number; y: number }, next: linkedNode | null = null) {
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
  constructor(spawnCoord: { x: number; y: number }) {
    this.head = new linkedNode({ x: spawnCoord.x, y: spawnCoord.y });
    this.size = 0;
  }
  // move snake
  moveSnakeTo(coord: { x: number; y: number }) {
    // add a new head to snake body (move head to the new location)
    /// creating a new linked node
    const newBodyNode: linkedNode = new linkedNode(coord);
    /// adding it as new head
    const prevHead: linkedNode = this.head;
    newBodyNode.data = coord;
    newBodyNode.next = prevHead;
    this.head = newBodyNode;
    // remove tail from snake body
    var start = this.head;
    while (start.next?.next != null) {
      // second last
      start = start.next;
    }
    // removing last node of the linked list
    start.next = null;
  }
  // grow snake by 1 block
  growSnake(coord: { x: number; y: number }) {
    // add new block at the end of the snake body
    const newBodyNode: linkedNode = new linkedNode(coord);
    while (this.head.next != null) {
      this.head = this.head.next;
    }
    // appending body block to snake
    this.head.next = newBodyNode;
  }
  // reverse a linked list
  reverseSnake() {}
}

export default Snake;
