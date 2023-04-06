"use client";
import { useInsertionEffect } from "react";

const SettingTheme = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  useInsertionEffect(() => {
    // localStorage.theme = "dark";
    // document.documentElement.classList.add("dark");
    //   if (
    //     localStorage.theme === "dark" ||
    //     (!("theme" in localStorage) &&
    //       window.matchMedia("(prefers-color-scheme: dark)").matches)
    //   ) {
    //     document.documentElement.classList.add("dark");
    //   } else {
    //     document.documentElement.classList.remove("dark");
    //   }
  });

  //   // Whenever the user explicitly chooses light mode
  //   localStorage.theme = "light";

  //   // Whenever the user explicitly chooses dark mode

  //   // Whenever the user explicitly chooses to respect the OS preference
  //   localStorage.removeItem("theme");
  return <></>;
};
export default SettingTheme;
