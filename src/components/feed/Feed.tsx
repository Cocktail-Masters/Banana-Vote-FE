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
      <div className="hover:bg-[rgba(234, 238, 243, 0.3)] m-auto mt-4 mb-4 h-auto w-full bg-white drop-shadow-md transition duration-100 ease-in-out md:rounded-xl">
        {/* 피드 헤더 */}
        <div className="p-5">
          <FeedHeader
            badge_image_url={data.writer.badge_image_url}
            nickname={data.writer.nickname}
            end_date={data.vote.end_date}
            is_closed={data.vote.is_closed}
            voted_number={data.vote.voted_number}
          />
        </div>
        <div className="grid grid-cols-1 divide-y">
          {/* 피드 바디 */}

          <div className="pb-5 pl-5 pr-5">
            {/* 피드 제목 */}
            <Link href={`/vote/detail/${data.vote.id}`}>
              <FeedTitle content={data.vote.title} />
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
          <div className="relative flex h-auto w-full">
            {/* 댓글 더보기 */}
            <div className="flex h-6 w-full">
              <div className="absolute left-0 flex h-5 text-sm font-bold">
                베스트 댓글
              </div>
              <Link href={`/vote/detail/${data.vote.id}`}>
                <div className="absolute right-0 flex h-5 text-sm font-bold hover:border-b">
                  댓글 {data.vote.opinion_number.toLocaleString()}개
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 font-bold"
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
          </div>
          {/* 베스트 댓글 1개 */}
          <div className="relative h-auto w-full">
            <BestOpinion
              nickname={data.best_opinion.writer.nickname}
              best_opinion={data.best_opinion}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
