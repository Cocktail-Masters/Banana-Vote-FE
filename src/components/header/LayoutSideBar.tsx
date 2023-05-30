"use client";
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
  closer,
}: {
  isOpen: boolean;
  tabs: tabType[];
  closer: () => void;
}) => {
  const pathname = usePathname();
  const [selectedTabPath, setSelectedTabPath] = useState<string | null>(null);
  useEffect(() => {
    const removeLanguagePath = "/" + pathname.split("/").slice(2).join("/");
    setSelectedTabPath(removeLanguagePath);
  }, [pathname]);

  return (
    <>
      <div
        className="absolute top-0 right-0 z-[100] flex h-full w-[300px] transform flex-col gap-[30px] bg-bg-feed-dark pt-[80px] text-text-normal-dark transition  duration-200 dark:bg-black"
        style={{
          transform: isOpen ? "translate(0%)" : "translate(100%)",
        }}
      >
        <LayoutNavigation isOpen={isOpen}>
          {tabs.map((item) => (
            <LayoutOfSidBarItem key={item.label}>
              <div
                className={`h-full ${
                  item.path === selectedTabPath ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedTabPath(item.path);
                  closer();
                }}
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
