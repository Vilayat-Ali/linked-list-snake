import { useState, useCallback } from "react";

const useToggle = () => {
  const [componentState, setComponentState] = useState<Boolean>(false);
  const Toggle = () =>
    useCallback(() => {
      setComponentState(!componentState);
    }, []);
  return [componentState, Toggle];
};

export default useToggle;
