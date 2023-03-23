/**
 * @author mingyu
 * @description 메인페이지에서 보이는 하나의 피드에 대한 컴포넌트
 */
"use client";
import React from "react";
import FeedHeader from "./FeedHeader";
import VS from "./VS";
import VoteItemList from "./VoteItemList";
import FeedTitle from "./FeedTitle";
import { voteFeedType } from "@/types";
import BestOpinion from "./BestOpinion";
import Link from "next/link";

const Feed = ({ data }: { data: voteFeedType }) => {
  return (
    <>
      <div className="w-full md:w-[90%] md:rounded-xl lg:w-[800px] h-auto m-auto mt-4 mb-4 bg-white drop-shadow-md hover:bg-[rgba(234, 238, 243, 0.3)] transition duration-100 ease-in-out">
        {/* 피드 헤더 */}
        <div className="p-5">
          <FeedHeader
            badge_url={data.badge_url}
            nickname={data.nickname}
            end_date={data.end_date}
            is_closed={data.is_closed}
            n_vote={data.n_vote}
          />
        </div>
        <div className="grid grid-cols-1 divide-y">
          {/* 피드 바디 */}

          <div className="pb-5 pl-5 pr-5">
            {/* 피드 제목 */}
            <Link href={`/vote/detail/${data.vote_id}`}>
              <FeedTitle content={data.vote_title} />
            </Link>
            {/* 피드 투표 항목들 */}
            <VoteItemList vote_items={data.vote_items} />
            {/* 요소의 갯수가 2일때 등장하는 VS */}
            {data.vote_items && data.vote_items.length === 2 && <VS />}
          </div>
        </div>
        <hr />
        <div className="p-5">
          {/* 피드 푸터 */}
          <div>
            <div className="flex relative">
              <Link href={`/vote/detail/${data.vote_id}`}>
                <div className="flex absolute h-5 right-0 text-sm font-bold hover:border-b">
                  댓글 {data.n_opinion.toLocaleString()}개
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <BestOpinion
              nickname={data.nickname}
              best_opinion={data.best_opinion}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
