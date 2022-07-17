import Snake from "../game/snake";

// parser function
const parser = (snakeInstance: Snake): number[][] => {
  var parsedSnakeArr: number[][] = [];
  if (snakeInstance.size) {
    var start = snakeInstance.head;
    while (start.next != null) {
      console.log(start.data);
      parsedSnakeArr.push([start.data.x, start.data.y]); // making the parsed snake array
      start = start.next;
    }
    parsedSnakeArr.push([start.data.x, start.data.y]); // making the parsed snake array
  }
  return parsedSnakeArr;
};

export default parser;
