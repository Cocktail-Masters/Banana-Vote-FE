/**
 * @author mingyu
 */
"use client";

import { Dispatch, SetStateAction } from "react";

type menuBarElementProps = {
  id: number;
  name: string;
  currentMenu: number;
  setCurrentMenu: Dispatch<SetStateAction<number>>;
};

type menuDesignType = {
  [key: number]: string;
};

const menuDesign: menuDesignType = {
  0: "my-1 flex w-full cursor-pointer items-center justify-center gap-x-2 py-6 duration-150 ease-in-out bg-[#0F1722]",
  1: "my-1 flex w-full cursor-pointer items-center justify-center gap-x-2 py-6 duration-150 ease-in-out hover:bg-[#0F1722]",
};

const MenuBarElement = ({
  id,
  name,
  currentMenu,
  setCurrentMenu,
}: menuBarElementProps) => {
  return (
    <div
      className={menuDesign[currentMenu && id === currentMenu ? 0 : 1]}
      onClick={() => setCurrentMenu(id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        {iconSwitch(name)}
      </svg>
      <p className="flex text-xl font-semibold leading-6">{name}</p>
    </div>
  );
};

const iconSwitch = (name: string) => {
  switch (name) {
    case "회원 관리":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      );
    case "신고 관리":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      );
    case "메뉴1":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      );
    default:
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        />
      );
  }
};

export default MenuBarElement;
