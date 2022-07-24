import { useState } from "react";

const useToggle = (initialState: boolean = false) => {
  // state
  const [componentState, alterComponentState]: [boolean, any] =
    useState<boolean>(initialState);
  // toggle function
  const Toggle = () => alterComponentState(!componentState);
  // return
  return [componentState, Toggle] as const;
};

export default useToggle;
