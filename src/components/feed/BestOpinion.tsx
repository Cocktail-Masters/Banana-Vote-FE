/**
 * @author mingyu
 * @description 피드에서 가장 좋아요가 많은 댓글 1개를 표시하는 컴포넌트
 */
"use client";
import React from "react";
import { opinionType } from "@/types";
import BadgeImage from "../common/BadgeImage";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import enLocale from "timeago.js/lib/lang/en_US";
import { usePathname } from "next/navigation";

// nickname: 글 작성자 닉네임
const BestOpinion = ({
  nickname,
  best_opinion,
}: {
  nickname: string;
  best_opinion: opinionType;
}) => {
  const pathname = usePathname();
  /**
   * @description 포맷에 맞춰 상대 시간 구하기
   */
  const getRelativeDays = (date: string) => {
    // next/navigation's usePathname Hook is required.
    const currentLng = pathname.substring(1, 3);
    register(currentLng, currentLng === "ko" ? koLocale : enLocale);
    return format(new Date(date), currentLng);
  };

  return (
    <div className="relative mt-1 flex h-14 flex-col justify-center gap-2">
      {/* 프로필 */}
      <div className="absolute top-1 left-1 flex h-full w-full flex-1 flex-wrap items-start">
        <BadgeImage
          badge_url={""}
          nickname={nickname}
          isWriter={nickname === best_opinion.nickname ? true : false}
        />
        <div className="absolute left-12 h-full w-[80%] md:w-[90%]">
          {/* 닉네임, 날짜 표시 */}
          <div className="flex h-5">
            <h5 className="jusitfy-center mt-1 mr-2 flex h-full items-start text-sm font-semibold">
              {nickname}
            </h5>
            <p
              className="jusitfy-center mt-1 flex h-full items-center text-xs text-gray-400"
              color="gray"
            >
              {getRelativeDays(best_opinion.date)}
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
