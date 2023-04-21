import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ColorModeType = {
  theme: "dark" | "light";
  setTheme: (changeTheme: "dark" | "light") => void;
};

// export const createColorSlice: StateCreator<ColorModeType> = (set) => ({
//   theme: "light",
//   setTheme: (changeTheme: "dark" | "light") => set({ theme: changeTheme }),
// });

export const useThemeStore = create<ColorModeType>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (switchTheme: "dark" | "light") =>
        set((state) => ({
          theme: switchTheme,
        })),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
