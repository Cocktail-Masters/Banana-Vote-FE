/**
 * @author mingyu
 * @description 피드의 헤더 컴포넌트
 */
"use client";
import Image from "next/image";
import React from "react";
import MB from "@assets/icons/MenuButtonIcon.svg";
import BadgeImage from "./../common/BadgeImage";
import { useState } from "react";
import { motion } from "framer-motion";
import ModalBackground from "../common/modal/ModalBackground";

type HeaderContentProps = {
  badge_url?: string;
  nickname: string;
  end_date: string;
  is_closed: boolean;
  n_vote: number;
};

const FeedHeader = ({
  badge_url,
  nickname,
  end_date,
  is_closed,
  n_vote,
}: HeaderContentProps) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  /**
   * @description 3개점 메뉴 open 버튼 클릭 시 이벤트
   */
  const handleMenuClick = () => {
    setMenuToggle(!menuToggle);
  };

  /**
   * @descirption 메뉴 요소 클릭 시 이벤트
   */
  const handleMenuElementClick = (e: any) => {
    const menuName = e.target.innerText;

    // TODO : 각 메뉴 이름에 해당하는 메소드 작성
    if (menuName === "신고") {
      console.log(menuName);
    } else if (menuName === "공유") {
      console.log(menuName);
    }
  };

  /**
   * @description 투표 종료까지 며칠 남았는지 계산하는 함수
   * @returns 오늘과 해당 날짜의 일 수 차이
   */
  const getRemainDates = () => {
    let startDate = new Date().getTime();
    let endDate = new Date(end_date).getTime();
    let diff = endDate - startDate;
    let result = Math.floor(diff / (1000 * 60 * 60 * 24));
    return result;
  };

  return (
    <div className="flex relative">
      {/* 프로필 */}
      <div className="flex gap-4 items-center flex-wrap">
        <BadgeImage badge_url={badge_url} nickname={nickname} />
        <div>
          <h3 className="text-base font-bold mb-1">{nickname}</h3>
          <div className="flex text-sm">
            <div className="mr-3 h-4">
              {is_closed ? "종료됨" : getRemainDates() + "일 남음"}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

            <div className="text-sm">{n_vote.toLocaleString()}</div>
          </div>
        </div>
      </div>
      {/* 메뉴 버튼, 메뉴 리스트 */}
      <div
        className="flex absolute w-10 h-10 right-1 items-center justify-center"
        onClick={handleMenuClick}
      >
        {/* 메뉴 버튼 */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full hover:bg-gray-200 active:bg-gray-300"
        >
          <Image
            src={MB}
            alt="menu_toggle_button"
            className="w-full h-full p-2"
          />
        </motion.button>
        {/* 메뉴 리스트 */}
        {menuToggle && (
          <>
            <ModalBackground setState={setMenuToggle} />
            <ul className="absolute z-50 top-10 right-1 w-36 h-auto p-2 border bg-white rounded-lg drop-shadow-sm hover:cursor-pointer">
              <li
                className="pt-2 pb-2 pl-3 text-left rounded-lg hover:bg-gray-100 transition duration-100"
                onClick={(e) => handleMenuElementClick(e)}
              >
                신고
              </li>
              <li
                className="pt-2 pb-2 pl-3 text-left rounded-lg hover:bg-gray-100 transition duration-100"
                onClick={(e) => handleMenuElementClick(e)}
              >
                공유
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedHeader;
