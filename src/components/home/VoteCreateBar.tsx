"use client";

/**
 * @author mingyu
 * @description 투표 생성으로 이동하는 바
 */

import Link from "next/link";
import React from "react";
import BadgeImage from "../common/BadgeImage";

type voteCreateBarProps = {
  badge_image_url?: string;
};

const VoteCreateBar = ({ badge_image_url }: voteCreateBarProps) => {
  return (
    <div className="m-auto mt-4 mb-4 h-[80px] w-full rounded-xl bg-bg-feed drop-shadow-md dark:bg-bg-feed-dark">
      {/* 바디 */}
      <div className="flex h-full items-center justify-between p-5">
        {/* 뱃지 */}
        <BadgeImage user_id={2} badge_image_url={badge_image_url} />
        {/* 투표 생성 버튼 */}
        <Link
          className="flex h-full w-full items-center justify-center"
          href="/vote/create"
          passHref
        >
          <button
            id="vote-create-button"
            className="lg:text-md ml-2 h-10 w-full rounded-full bg-gray-100 text-xs font-semibold text-gray-500 transition hover:bg-gray-200 dark:bg-[#3a3b3c] dark:text-text-feed-dark dark:hover:bg-neutral-600 md:text-base"
          >
            원하는 투표를 만들어보세요
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VoteCreateBar;
