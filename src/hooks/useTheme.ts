import { useLayoutEffect, useState } from "react";

const useTheme = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">();
  useLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }, []);

  const toggleThemeHandler = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else if (localStorage.theme === "light") {
      localStorage.theme = "dark";
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setThemeMode("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setThemeMode("light");
    }
  };
  return { themeMode, setThemeMode, toggleThemeHandler };
};
export default useTheme;
