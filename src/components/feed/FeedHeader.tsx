/**
 * @author mingyu
 * @description 피드의 헤더 컴포넌트
 */
"use client";
import React from "react";
import BadgeImage from "./../common/BadgeImage";
import { getRemainDates } from "@/common/getRemainDates";
import OptionMenu from "@/components/common/menu/OptionMenu";
import useTranslation from "@/hooks/useTranslation";

type headerContentProps = {
  writerId: number;
  voteId: number;
  badgeImageUrl?: string;
  nickname: string;
  endDate: string;
  isClosed: boolean;
  votedNumber: number;
};

const FeedHeader = ({
  writerId,
  voteId,
  badgeImageUrl,
  nickname,
  endDate,
  isClosed,
  votedNumber,
}: headerContentProps) => {
  const { translation } = useTranslation();

  const MENU_LIST = [
    {
      id: 1,
      label: translation("feed.feed_header.report"),
    },
    {
      id: 2,
      label: translation("feed.feed_header.share"),
    },
  ];

  /**
   * @todo 메뉴 요소 클릭 시 이벤트
   */
  const handleMenuElementClick = (e: React.MouseEvent<HTMLElement>) => {
    const menuName = (e.target as HTMLElement).innerText;
    const menuId = (e.target as HTMLElement).getAttribute("id");

    /** @todo : 각 메뉴 이름에 해당하는 메소드 작성 */
    if (menuName === translation("feed.feed_header.report")) {
      console.log(menuId + " : " + menuName);
    } else if (menuName === translation("feed.feed_header.share")) {
      console.log(menuId + " : " + menuName);
    } else {
      alert("Error : " + menuName);
    }
  };

  /**
   * @todo 닉네임 클릭 시 사용자 프로필 페이지 이동
   */
  const handleNicknameClick = () => {
    console.log(writerId);
  };

  return (
    <div className="relative flex">
      {/* 프로필 */}
      <div className="flex flex-wrap items-center gap-4">
        <BadgeImage userId={writerId} badgeImageUrl={badgeImageUrl} />
        <div>
          <h3
            id={`writer-${writerId}`}
            className="writer mb-1 cursor-pointer text-base font-bold text-text-title dark:text-text-title-dark"
            onClick={() => handleNicknameClick()}
          >
            {nickname}
          </h3>
          <div className="flex text-sm">
            <p className="mr-3 h-4 text-text-feed dark:text-text-feed-dark">
              {isClosed || getRemainDates({ endDate: endDate }) <= 0
                ? translation("feed.feed_header.closed")
                : getRemainDates({ endDate: endDate }) +
                  translation("feed.feed_header.days_left")}
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
              {votedNumber && votedNumber.toLocaleString()}
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
