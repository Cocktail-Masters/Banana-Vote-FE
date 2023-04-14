"use client";
import useTheme from "@/hooks/useTheme";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { tabType } from "./LayoutHeader";

const LayoutTopBar = ({ tabs }: { tabs: tabType[] }) => {
  const pathname = usePathname();

  const [selectedTabPath, setSelectedTabPath] = useState<string | null>(null);
  useEffect(() => {
    const removeLanguagePath = "/" + pathname.split("/").slice(2).join("/");
    setSelectedTabPath(removeLanguagePath);
  }, [pathname]);
  const { themeMode, toggleThemeHandler } = useTheme();

  const isMatchPath = (path: string) => {
    if (selectedTabPath === null) return false;
    return selectedTabPath.substring(0, path.length) === path;
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
        <button onClick={toggleThemeHandler}>
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
        <button onClick={toggleThemeHandler}>
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
