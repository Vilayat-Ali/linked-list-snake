import generateRandom from "./randomGen";
import config from "../config/app.config";

export interface spawnFoodReturnType {
  coord: { x: number; y: number };
  color: string;
}

// spawn food in playground arena at random locations
const spawnFood = (): spawnFoodReturnType => {
  /// possible range of food colors
  const colorSet: string[] = ["#000", "#021021", "blue", "teal", "purple"];
  const food: spawnFoodReturnType = {
    coord: {
      x: generateRandom(0, config.playgroundSize[0]),
      y: generateRandom(0, config.playgroundSize[1]),
    },
    color: colorSet[generateRandom(0, colorSet.length - 1)],
  };
  return food;
};

// exporting
export default spawnFood;
