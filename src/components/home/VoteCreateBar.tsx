"use client";

/**
 * @author mingyu
 * @description 투표 생성으로 이동하는 바
 */

import Link from "next/link";
import React from "react";
import BadgeImage from "../common/BadgeImage";

type voteCreateBarProps = {
  nickname: string;
  badge_url: string | undefined;
};

const VoteCreateBar = ({ nickname, badge_url }: voteCreateBarProps) => {
  return (
    <div className="w-full m-auto h-[80px] mt-4 mb-4 bg-white rounded-xl drop-shadow-md">
      {/* 바디 */}
      <div className="flex justify-between items-center h-full p-5">
        {/* 뱃지 */}
        <BadgeImage nickname={nickname} badge_url={badge_url} />
        {/* 투표 생성 버튼 */}
        <Link
          className="flex w-full h-full justify-center items-center"
          href="/vote/create"
          passHref
        >
          <button className="ml-2 w-full h-10 bg-gray-100 rounded-full text-gray-500 font-semibold text-xs md:text-sm lg:text-md hover:bg-gray-200 transition">
            원하는 투표를 만들어보세요
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VoteCreateBar;
