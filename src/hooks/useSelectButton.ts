import { useState } from "react";

const useSelectButton = <T>(defaultState: T) => {
  const [state, setState] = useState<T>(defaultState);

  const onClickHandler = (newState: T) => {
    setState(newState);
  };
  return { state, setState, onClickHandler };
};
export default useSelectButton;
