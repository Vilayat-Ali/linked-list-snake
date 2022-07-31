import generateRandom from "./randomGen";
import config from "../config/app.config";

export interface spawnFoodReturnType {
  coord: { x: number; y: number };
  color: string;
}

// generate random color
const randomHexColorCode = (): string => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

// spawn food in playground arena at random locations
const spawnFood = (): spawnFoodReturnType => {
  /// possible range of food colors
  const food: spawnFoodReturnType = {
    coord: {
      x: generateRandom(0, config.playgroundSize[0]),
      y: generateRandom(0, config.playgroundSize[1]),
    },
    color: randomHexColorCode(),
  };
  return food;
};

// exporting
export default spawnFood;
