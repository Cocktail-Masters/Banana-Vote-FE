/**
 * @author mingyu
 * @description 피드의 헤더 컴포넌트
 */
"use client";
import React from "react";
import BadgeImage from "./../common/BadgeImage";
import { getRemainDates } from "@/common/getRemainDates";
import OptionMenu from "@/components/common/menu/OptionMenu";

type headerContentProps = {
  writer_id: number;
  vote_id: number;
  badge_image_url?: string;
  nickname: string;
  end_date: string;
  is_closed: boolean;
  voted_number: number;
};

const FeedHeader = ({
  writer_id,
  vote_id,
  badge_image_url,
  nickname,
  end_date,
  is_closed,
  voted_number,
}: headerContentProps) => {
  const MENU_LIST = [
    {
      id: 1,
      label: "신고",
    },
    {
      id: 2,
      label: "공유",
    },
  ];

  /**
   * @todo 메뉴 요소 클릭 시 이벤트
   */
  const handleMenuElementClick = (e: React.MouseEvent<HTMLElement>) => {
    const menuName = (e.target as HTMLElement).innerText;
    const menuId = (e.target as HTMLElement).getAttribute("id");

    // TODO : 각 메뉴 이름에 해당하는 메소드 작성
    if (menuName === "신고") {
      console.log(menuId + " : " + menuName);
    } else if (menuName === "공유") {
      console.log(menuId + " : " + menuName);
    } else {
      alert("잘못된 요청입니다." + menuName);
    }
  };

  /**
   * @todo 닉네임 클릭 시 사용자 프로필 페이지 이동
   */
  const handleNicknameClick = () => {
    console.log(writer_id);
  };

  return (
    <div className="relative flex">
      {/* 프로필 */}
      <div className="flex flex-wrap items-center gap-4">
        <BadgeImage user_id={writer_id} badge_image_url={badge_image_url} />
        <div>
          <h3
            id={`writer-${writer_id}`}
            className="writer mb-1 cursor-pointer text-base font-bold text-text-title dark:text-text-title-dark"
            onClick={() => handleNicknameClick()}
          >
            {nickname}
          </h3>
          <div className="flex text-sm">
            <p className="mr-3 h-4 text-text-feed dark:text-text-feed-dark">
              {is_closed || getRemainDates({ endDate: end_date }) <= 0
                ? "종료됨"
                : getRemainDates({ endDate: end_date }) + "일 남음"}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 text-text-feed dark:text-text-feed-dark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

            <p className="ml-[2px] text-sm text-text-feed dark:text-text-feed-dark">
              {voted_number.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      {/* 메뉴 버튼, 메뉴 리스트 */}
      <OptionMenu handleClick={handleMenuElementClick} menuList={MENU_LIST} />
    </div>
  );
};

export default FeedHeader;
