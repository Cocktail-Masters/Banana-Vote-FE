/**
 * @author mingyu
 * @description 메뉴 컴포넌트
 * @description absolute가 적용되어 있으므로 Menu를 감싸는 부모 태그는 relative거나 absolute여야 합니다.
 * @param handleClick 메뉴 요소 클릭 시 이벤트 함수
 * @param menuList 메뉴 리스트
 */
"use client";
import ThreeDotsMenuButton from "@/components/animation/ThreeDotsMenuButton";
import React, { useState } from "react";
import ModalBackground from "../modal/ModalBackground";

type menuElement = {
  id: number;
  label: string;
};

type menuProps = {
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  menuList: menuElement[];
};

const OptionMenu = ({ handleClick, menuList }: menuProps) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  /**
   * @description 3개점 메뉴 open 버튼 클릭 시 이벤트
   */
  const handleMenuClick = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div
      className="absolute right-1 flex h-10 w-10 items-center justify-center"
      onClick={handleMenuClick}
    >
      {/* 메뉴 버튼 */}
      <ThreeDotsMenuButton handleClick={handleMenuClick} />
      {/* 메뉴 리스트 */}
      {menuToggle && (
        <>
          <ModalBackground setState={setMenuToggle} />
          <ul className="absolute top-10 right-1 z-50 h-auto w-36 rounded-lg border bg-bg-feed p-2 shadow-md shadow-black/50 hover:cursor-pointer dark:border-none dark:bg-bg-feed-dark dark:shadow-black">
            {menuList.map((item: menuElement) => (
              <li
                id={item.id.toString()}
                key={item.id}
                className="rounded-lg pt-2 pb-2 pl-3 text-left text-text-feed transition duration-100 hover:bg-gray-100 dark:text-text-feed-dark dark:hover:bg-[#3A3B3C]"
                onClick={handleClick}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default OptionMenu;
