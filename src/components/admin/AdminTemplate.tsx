/**
 * @author mingyu
 */
"use client";
import api from "@/common/axiosInstance";
import React, { useLayoutEffect, useState } from "react";
import ManageReport from "./menu/ManageReport";
import ManageUser from "./menu/ManageUser";
import MenuTitle from "./menu/MenuTitle";
import MenuBarElement from "./MenuBarElement";
import MenuBarTitle from "./MenuBarTitle";
import { useRouter } from "next/navigation";

/** Static Values */
const MENUS = [
  "회원 관리",
  "신고 관리",
  "스토어 관리",
  "이벤트 관리",
  "태그 관리",
  "업적 관리",
  "시즌 관리",
];

const AdminTemplate = () => {
  const router = useRouter();
  const [currentMenu, setCurrentMenu] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);

  useLayoutEffect(() => {
    async function checkRole() {
      const fetchRole = await api.get(`/users/role`);

      if (fetchRole.status !== 200 || fetchRole.data.role !== "ADMIN") {
        router.push(`/home`);
        return;
      }

      setChecked(true);
    }

    checkRole();
  }, []);

  return (
    <>
      {checked ? (
        <>
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
          <div className="flex h-full flex-1 justify-center bg-white">
            <div className="flex h-full w-full flex-col items-center bg-[#e7e7ea] text-black">
              <MenuTitle title={MENUS[currentMenu]} />
              {menuSwitch(currentMenu)}
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-auto w-auto p-3">Checking the role...</div>
      )}
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
    case 2: // 스토어 관리
      return <div className="text-black">{m}</div>;
    case 3: // 이벤트 관리
      return <div className="text-black">{m}</div>;
    case 4: // 태그 관리
      return <div className="text-black">{m}</div>;
    case 5: // 업적 관리
      return <div className="text-black">{m}</div>;
    case 6: // 시즌 관리
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
