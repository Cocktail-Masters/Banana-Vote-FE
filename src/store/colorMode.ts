import { create, State } from "zustand";
import {
  devtools,
  persist,
  PersistStorage,
  StorageValue,
} from "zustand/middleware";

export type colorSliceType = {
  theme: "dark" | "light";
  setTheme: (changeTheme: "dark" | "light") => void;
};

const storage: PersistStorage<State> = {
  getItem: async (name: string) => {
    console.log("get name", name);
    if (name === "theme") {
      const value = localStorage.getItem("theme");
      console.log("get value", value);

      if (value) {
        console.log("asdasd");
        console.log("get value", value);
        return { state: { theme: value } };
      }
    }
    return null;
  },
  setItem: async (name: string, value: StorageValue<State>) => {
    console.log("set name", name, value);
    if (name === "theme") {
      localStorage.setItem("theme", JSON.stringify(value));
    }
  },
  removeItem: async (name: string) => {
    console.log("remove name", name);
    if (name === "theme") {
      localStorage.removeItem("theme");
    }
  },
};

export const useColorModeStore = create(
  devtools(
    persist(
      (set) => ({
        theme: "light",
        setTheme: (changeTheme: "dark" | "light") =>
          set((state: colorSliceType) => ({ ...state, theme: changeTheme })),
      }),
      {
        name: "theme",
        storage,
      }
    )
  )
);

// useColorModeStore.persist.setOptions({
//   name: "theme",
// });

// useColorModeStore.persist.getOptions().name;
