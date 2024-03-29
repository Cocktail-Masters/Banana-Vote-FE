/**
 * @author mingyu
 * @description 투표 생성으로 이동하는 바
 */
"use client";
import Link from "next/link";
import React from "react";
import BadgeImage from "../common/BadgeImage";
import useTranslation from "@/hooks/useTranslation";

type voteCreateBarProps = {
  badgeImageUrl?: string;
};

const VoteCreateBar = ({ badgeImageUrl }: voteCreateBarProps) => {
  const { translation } = useTranslation();

  return (
    <div className="m-auto mt-4 mb-4 h-[80px] w-full rounded-xl bg-bg-feed drop-shadow-md dark:bg-bg-feed-dark">
      {/* 바디 */}
      <div className="flex h-full items-center justify-between p-5">
        {/* 뱃지 */}
        <BadgeImage userId={2} badgeImageUrl={badgeImageUrl} />
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
            {translation("home.vote_create_bar.create_vote_message")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VoteCreateBar;
