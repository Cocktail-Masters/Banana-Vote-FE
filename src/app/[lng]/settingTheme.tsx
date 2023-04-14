"use client";
import { useInsertionEffect } from "react";

const SettingTheme = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  useInsertionEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, []);

  return <></>;
};
export default SettingTheme;
