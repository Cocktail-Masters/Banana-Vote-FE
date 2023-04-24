/**
 * @author mingyu
 * @description Zustand의 useStore를 서버 사이드에서 사용하지 않고, 클라이언트 사이드에서만 사용하기 위한 Hook
 */
import { useState, useEffect } from "react";

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
