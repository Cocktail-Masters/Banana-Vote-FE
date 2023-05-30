import { create, State } from "zustand";
import {
  devtools,
  persist,
  PersistStorage,
  StorageValue,
} from "zustand/middleware";

export type colorStoreType = {
  theme: "dark" | "light";
  setTheme: (changeTheme: "dark" | "light") => void;
};

const storage: PersistStorage<State> = {
  getItem: async (name: string) => {
    if (name === "zustand-theme") {
      const value = localStorage.getItem("theme");

      if (value) {
        return { state: { theme: value } };
      }
    }
    return null;
  },
  setItem: async (name: string, value: StorageValue<State>) => {
    if (name === "zustand-theme") {
      localStorage.setItem("zustand-theme", JSON.stringify(value));
    }
  },
  removeItem: async (name: string) => {
    if (name === "zustand-theme") {
      localStorage.removeItem("zustand-theme");
    }
  },
};

export const useColorModeStore = create(
  devtools(
    persist(
      (set) => ({
        theme: "light",
        setTheme: (changeTheme: "dark" | "light") =>
          set((state: colorStoreType) => ({ ...state, theme: changeTheme })),
      }),
      {
        name: "zustand-theme",
        storage,
      }
    )
  )
);
