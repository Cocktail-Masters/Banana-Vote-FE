/**
 * @author mingyu
 * @description 피드에서 가장 좋아요가 많은 댓글 1개를 표시하는 컴포넌트
 */
"use client";
import React from "react";
import { opinionType } from "@/types";
import BadgeImage from "../common/BadgeImage";
import { usePathname } from "next/navigation";
import { getRelativeDays } from "@/common/getRemainDates";

// nickname: 글 작성자 닉네임
const BestOpinion = ({
  writer_id,
  nickname,
  best_opinion,
}: {
  writer_id: number;
  nickname: string;
  best_opinion: opinionType;
}) => {
  const pathname = usePathname();

  /**
   * @todo 클릭 시 사용자 프로필 이동
   */
  const handleNicknameClick = () => {
    console.log(writer_id);
  };

  return (
    <div className="relative mt-1 flex h-14 flex-col justify-center gap-2">
      {/* 프로필 */}
      <div className="absolute top-1 left-1 flex h-full w-full flex-1 flex-wrap items-start">
        <BadgeImage
          user_id={writer_id}
          badge_image_url={best_opinion.writer.badge_image_url}
        />
        <div className="absolute left-12 h-full w-[80%] md:w-[90%]">
          {/* 닉네임, 날짜 표시 */}
          <div className="flex h-5">
            <h5
              className="jusitfy-center mt-1 mr-2 flex h-full cursor-pointer items-start text-sm font-semibold"
              onClick={() => handleNicknameClick()}
            >
              {nickname}
            </h5>
            <p
              className="jusitfy-center mt-1 flex h-full items-center text-xs text-gray-400"
              color="gray"
            >
              {getRelativeDays(pathname, best_opinion.created_date)}
            </p>
          </div>
          {/* 댓글 내용 */}
          <div className="mt-2 flex h-5 truncate">
            <p className="truncate text-sm">{best_opinion.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOpinion;
