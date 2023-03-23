"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { tabType } from "./LayoutHeader";

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
    setSelectedTabPath(pathname);
  }, [pathname]);

  return (
    <>
      <div className="z-100 absolute top-0 right-0 flex h-full w-[80%] transform flex-col justify-center gap-[30px] bg-gray-300 transition duration-200 lg:hidden">
        {tabs.map((item) => (
          <div
            key={item.label}
            className={`relative h-full ${
              item.path === selectedTabPath ? "selected" : ""
            }`}
            onClick={() => setSelectedTabPath(item.path)}
          >
            <div className="flex h-full items-center justify-center">
              <Link href={item.path}>{`${item.label}`}</Link>
            </div>
            <div className="flex justify-end">
              {item.path === selectedTabPath ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </div>
          </div>
        ))}
        <div className="p-3">마이페이지</div>
      </div>
    </>
  );
};
export default React.memo(LayoutSideBar);
