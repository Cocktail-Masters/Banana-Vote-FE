"use client";

import React, { useCallback, useEffect, useState } from "react";
import Logo from "@assets/icons/logo.svg";
import Image from "next/image";
import "./LayoutHeader.style.css";
import Link from "next/link";
import LayoutSidebar from "@components/Layout/LayoutSideBar";
import HamburgerMenuButton from "../animation/HamburgerMenuButton";
import LayoutTopBar from "./LayoutTopBar";

export type tabType = {
  label: string;
  path: string;
};

const LayoutHeader = () => {
  const tabs: tabType[] = [
    { label: "투표목록", path: "/home" },
    { label: "인기투표", path: "/vote/popular" },
    { label: "이벤트", path: "/event" },
    { label: "스토어", path: "/store" },
    { label: "랭킹", path: "/ranking" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const menuClose = useCallback(
    (event: MediaQueryListEvent) => {
      if (event.matches && isOpen === true) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    let matchMedia650px = window.matchMedia("(min-width:960px)");
    matchMedia650px.addEventListener("change", menuClose);
    return () => matchMedia650px.removeEventListener("change", menuClose);
  }, [menuClose]);

  return (
    <>
      <div
        className="absolute top-0 left-0 z-10 h-full w-full bg-black/[0.5] transition-opacity"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? 1 : 0,
        }}
        onClick={() => setIsOpen(false)}
      />
      <div className="flex h-[90px] w-full select-none items-center justify-between border-b border-[#CACACA]">
        <div className="p-1">
          <Link href={"/home"}>
            <Image src={Logo} alt={"banana vote logo"} />
          </Link>
        </div>
        <div className="relative hidden h-full w-full flex-row items-center p-0 text-2xl lg:flex">
          <LayoutTopBar tabs={tabs} />
        </div>
        <div className="visible relative z-[110] m-3 p-1 lg:invisible lg:absolute">
          <HamburgerMenuButton
            isOpen={isOpen}
            strokeWidth={5}
            width={24}
            height={24}
            onClick={() => {
              setIsOpen((v) => !v);
            }}
          />
        </div>
      </div>
      <LayoutSidebar tabs={tabs} isOpen={isOpen}></LayoutSidebar>
    </>
  );
};

export default LayoutHeader;
