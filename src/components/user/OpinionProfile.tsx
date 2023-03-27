"use client";
/**
 * @author mingyu
 * @description 댓글의 프로필 부분 컴포넌트
 */
import React from "react";
import BadgeImage from "../common/BadgeImage";

interface OpinionProfileProps {
  image?: string;
  nickname: string;
  date: string;
  isWriter: boolean;
}

const OpinionProfile = ({
  image,
  nickname,
  date,
  isWriter,
}: OpinionProfileProps) => {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-4">
      <BadgeImage badge_url={image} nickname={nickname} isWriter={isWriter} />
      <div>
        <h5 className="mb-1 text-sm">{nickname}</h5>
        <p className="text-xs text-gray-400" color="gray">
          {date}
        </p>
      </div>
    </div>
  );
};

export default OpinionProfile;
