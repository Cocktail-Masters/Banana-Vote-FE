"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useInsertionEffect } from "react";
import { tabType } from "./LayoutHeader";

const LayoutTopBar = ({ tabs }: { tabs: tabType[] }) => {
  const pathname = usePathname();

  const [selectedTabPath, setSelectedTabPath] = useState<string | null>(null);
  const [themeMode, setThemeMode] = useState<"light" | "dark">();
  useEffect(() => {
    const removeLanguagePath = "/" + pathname.split("/").slice(2).join("/");
    setSelectedTabPath(removeLanguagePath);
  }, [pathname]);
  useInsertionEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  });

  const isMatchPath = (path: string) => {
    if (selectedTabPath === null) return false;
    return selectedTabPath.substring(0, path.length) === path;
  };
  const changeDarkTheme = () => {
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
  return (
    <>
      <div className="flex h-full flex-grow flex-row justify-center gap-[30px]">
        {tabs.map((item) => (
          <div
            key={item.label}
            className={`relative flex h-full`}
            onClick={() => setSelectedTabPath(item.path)}
          >
            <div className="relative flex h-full items-center justify-center">
              <Link href={item.path}>{`${item.label}`}</Link>
            </div>
            <div className="flex justify-end">
              {isMatchPath(item.path) ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </div>
          </div>
        ))}
      </div>
      {themeMode === "light" ? (
        <button onClick={changeDarkTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
      ) : (
        <button onClick={changeDarkTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="darkBlue"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="skyBlue"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      )}
      <div className="p-3">마이페이지</div>
    </>
  );
};

export default LayoutTopBar;
