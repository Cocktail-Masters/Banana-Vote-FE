import { type PropsWithChildren, useRef } from "react";
import type { StoreType } from "./index";
import { initializeLocaleStore, Provider } from "./index";

const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
  const storeRef = useRef<StoreType>();

  if (!storeRef.current) {
    storeRef.current = initializeLocaleStore(props);
  }

  return <Provider value={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
