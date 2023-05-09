"use client";
import React from "react";
import { opinionType } from "@/types";
import BadgeImage from "../common/BadgeImage";
import { usePathname } from "next/navigation";
import { getRelativeDays } from "@/common/getRemainDates";

const Opinion = ({
  opinion,
  isBest = false,
}: {
  opinion: opinionType;
  isBest?: boolean;
}) => {
  const pathname = usePathname();

  /**
   * @todo 클릭 시 사용자 프로필 이동
   */
  const handleNicknameClick = () => {
    console.log(opinion.writer.id);
  };

  return (
    <div className="relative mt-1 flex h-14 flex-col justify-center gap-2">
      {/* 프로필 */}
      <div className="absolute top-1 left-1 flex h-full w-full flex-1 flex-wrap items-center">
        <BadgeImage
          user_id={opinion.writer.id}
          badge_image_url={opinion.writer.badge_image_url}
        />
        <div className="absolute left-12 h-full w-[80%] md:w-[90%]">
          {/* 닉네임, 날짜 표시 */}
          <div className="flex h-5">
            <h5
              className="jusitfy-center mt-1 mr-2 flex h-full cursor-pointer items-start text-sm font-semibold text-text-normal dark:text-text-normal-dark"
              onClick={() => handleNicknameClick()}
            >
              {opinion.writer.nickname}
            </h5>
            <p
              className="jusitfy-center mt-1 flex h-full items-center text-xs text-gray-400"
              color="gray"
            >
              {getRelativeDays(pathname, opinion.created_date)}
            </p>
            <div className="absolute right-0 text-xs">
              <div className="flex">
                <div>{opinion.agreed_number}</div>
                <div>{opinion.disagreed_number}</div>
              </div>
            </div>
          </div>
          {/* 댓글 내용 */}
          <div className="mt-2 flex h-5 truncate">
            <p className="truncate text-sm text-text-article dark:text-text-article-dark">
              {opinion.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
