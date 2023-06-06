/**
 * @author mingyu
 */
"use client";
import React, { useState } from "react";
import ManageReport from "./menu/ManageReport";
import ManageUser from "./menu/ManageUser";
import MenuBarElement from "./MenuBarElement";
import MenuBarTitle from "./MenuBarTitle";

const AdminTemplate = () => {
  const [currentMenu, setCurrentMenu] = useState<number>(0);
  const MENUS = [
    "회원 관리",
    "신고 관리",
    "스토어 관리",
    "이벤트 관리",
    "태그 관리",
    "업적 관리",
    "시즌 관리",
  ];

  return (
    <>
      {/* 메뉴 세로 바 */}
      <div className="custom-scroll flex h-full w-80 flex-col justify-start overflow-y-scroll bg-[#1a2738]">
        <MenuBarTitle />
        {MENUS.map((item, index) => {
          return (
            <MenuBarElement
              key={index}
              name={item}
              id={index}
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
            />
          );
        })}
      </div>
      {/* 영역 */}
      <div className="flex h-full flex-1 justify-center bg-white">
        {menuSwitch(currentMenu)}
      </div>
    </>
  );
};

/**
 * 선택한 메뉴에 해당하는 페이지를 리턴하는 함수
 * @param 메뉴 id
 * @returns id에 해당하는 메뉴 페이지
 */
const menuSwitch = (m: number) => {
  switch (m) {
    case 0: // 회원 관리
      return <ManageUser />;
    case 1: // 신고 관리
      return <ManageReport />;
    case 2: // ?? 메뉴
      return <div className="text-black">{m}</div>;
    default:
      return (
        <div className="py-6 text-2xl font-bold text-black">
          잘못된 메뉴 요청입니다.
        </div>
      );
  }
};

export default AdminTemplate;
