import generateRandom from "./randomGen";

export interface spawnFoodReturnType {
  coord: { x: number; y: number };
  color: String;
}

// spawn food in playground arena at random locations
const spawnFood = (): spawnFoodReturnType => {
  /// possible range of food colors
  const colorSet: String[] = ["#000", "#021021"];
  const food: spawnFoodReturnType = {
    coord: { x: generateRandom(0), y: generateRandom(0) },
    color: colorSet[generateRandom(0, colorSet.length - 1)],
  };
  return food;
};

// exporting
export default spawnFood;
