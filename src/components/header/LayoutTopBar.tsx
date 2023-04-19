"use client";
import useTheme from "@/hooks/useTheme";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "../animation/themeToggle/DarkModeSwitch";
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
      <DarkModeSwitch
        onChange={toggleThemeHandler}
        checked={themeMode === "dark" ? true : false}
      />
      <div className="p-3">마이페이지</div>
    </>
  );
};

export default LayoutTopBar;
