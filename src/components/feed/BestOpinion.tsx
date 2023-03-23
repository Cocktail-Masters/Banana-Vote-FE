/**
 * @author mingyu
 * @description 피드에서 가장 좋아요가 많은 댓글 1개를 표시하는 컴포넌트
 */
"use client";
import React from "react";
import OpinionProfile from "../user/OpinionProfile";
import { opinionType } from "@/types";

// nickname: 글 작성자 닉네임
const BestOpinion = ({
  nickname,
  best_opinion,
}: {
  nickname: string;
  best_opinion: opinionType;
}) => {
  return (
    <div className="flex items-center">
      {/* 프로필 */}
      <div className="flex mr-3">
        <OpinionProfile
          nickname={best_opinion.nickname}
          isWriter={nickname === best_opinion.nickname ? true : false}
          date={best_opinion.date}
        />
      </div>
      {/* 댓글 내용 */}
      <div className="flex truncate max-w-[60%]">
        <p className="truncate">{best_opinion.content}</p>
      </div>
    </div>
  );
};

export default BestOpinion;
