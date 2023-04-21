/**
 * @author mingyu
 * @description Zustand useStore 훅 사용 예시
 */
"use client";
import { useStore } from "@/hooks/useStore";
import { useMainStore } from "@/store";
import { nanoid } from "nanoid";

const Test = () => {
  const store = useStore(useMainStore, (state) => state);
  console.log(store);

  return (
    <div
      id="test"
      className="flex h-14 w-full items-center justify-center rounded-2xl bg-indigo-100 text-black"
      onClick={() => store!.setNickname(nanoid())}
    >
      user nickname : {store && store.user.nickname}
    </div>
  );
};

export default Test;
