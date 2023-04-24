import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createUserSlice, userSliceType } from "./slices/user";

export const useMainStore = create(
  persist(
    immer<userSliceType>((set) => ({
      ...createUserSlice(set),
    })),
    {
      name: "zustand-persist",
    }
  )
);
