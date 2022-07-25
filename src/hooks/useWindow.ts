import { useEffect, useState } from "react";

const useWindow = (): number => {
  /// state
  const [windowWidth, setWindowWidth]: [number, any] = useState<number>(0);
  /// initial
  useEffect(() => setWindowWidth(window.innerWidth), []);
  /// looking for change in width
  useEffect(() => {
    const changeWidth = (): void => setWindowWidth(window.innerWidth);
    // adding event listener
    window.addEventListener("resize", changeWidth);
    // removing event listener
    return () => window.removeEventListener("resize", changeWidth);
  }, [windowWidth]);
  /// return
  return windowWidth;
};

export default useWindow;
