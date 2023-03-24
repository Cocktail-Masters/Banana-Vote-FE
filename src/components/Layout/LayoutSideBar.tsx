"use client";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { tabType } from "./LayoutHeader";
import LayoutNavigation from "./LayoutNavigation";
import LayoutOfSidBarItem from "./LayoutOfSidBarItem";
import LayoutSideBarMenuLine from "./LayoutSideBarMenuLine";

const LayoutSideBar = ({
  isOpen,
  tabs,
}: {
  isOpen: boolean;
  tabs: tabType[];
}) => {
  const pathname = usePathname();

  const [selectedTabPath, setSelectedTabPath] = useState<string | null>(null);
  useEffect(() => {
    const removeLanguagePath = "/" + pathname.split("/").slice(2).join("/");
    setSelectedTabPath(removeLanguagePath);
  }, [pathname]);

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <>
      <div
        className="absolute top-0 right-0 z-[100] flex h-full w-[300px] transform flex-col gap-[30px] bg-gray-300 pt-[80px]  transition duration-200 lg:hidden"
        style={{ transform: isOpen ? "translate(0%)" : "translate(100%)" }}
      >
        <LayoutNavigation isOpen={isOpen}>
          {tabs.map((item) => (
            <LayoutOfSidBarItem key={item.label}>
              <div
                className={`h-full ${
                  item.path === selectedTabPath ? "selected" : ""
                }`}
                onClick={() => setSelectedTabPath(item.path)}
              >
                <div className="flex h-full items-center justify-end">
                  <Link href={item.path}>{`${item.label}`}</Link>
                </div>
              </div>
              <LayoutSideBarMenuLine />
            </LayoutOfSidBarItem>
          ))}
          <LayoutOfSidBarItem>
            <div className="flex h-auto w-full items-center justify-end">
              마이페이지
            </div>
            <LayoutSideBarMenuLine />
          </LayoutOfSidBarItem>
        </LayoutNavigation>
      </div>
    </>
  );
};
export default LayoutSideBar;
