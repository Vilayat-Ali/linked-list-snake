import { useEffect, useState } from "react";

const useKey = (targetKey: any): Boolean => {
  // state
  const [isKeyPressed, setKeyPressed] = useState<Boolean>(false);
  const handleKeyPress = ({ key }: any): void => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };
  useEffect(() => {
    // adding event listener
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      // removing event listener
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return isKeyPressed;
};

export default useKey;
