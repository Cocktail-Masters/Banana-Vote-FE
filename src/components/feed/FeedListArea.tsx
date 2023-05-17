/**
 * @author mingyu
 */
"use client";
import VoteCreateBar from "../home/VoteCreateBar";
import { filterOptions } from "@/types";
import VoteSearchBar from "@/components/home/VoteSearchBar";
import FeedList from "./FeedList";
import { useEffect, useState } from "react";

const FeedListArea = () => {
  const [keyword, setKeyword] = useState<string>(""); // 검색 키워드
  const [filterOptions, setFilterOptions] = useState<filterOptions>({
    isClosed: false, // 종료 투표 포함 여부
    sortBy: 1, // 1 : 최신순, 2 : 참여순(인기순), 3 : 조회순, 4 : 댓글 많은 순
  });

  return (
    <div className="flex w-full flex-col items-start lg:w-[90%] xl:mr-5 xl:w-[800px]">
      {/* Search & Filter Bar */}
      <VoteSearchBar
        setKeyword={setKeyword}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      {/* Create Bar */}
      {/* <VoteCreateBar badge_image_url={} /> */}
      <VoteCreateBar />
      <FeedList
        filterOptions={filterOptions}
        keyword={keyword}
        setKeyword={setKeyword}
      />
    </div>
  );
};

export default FeedListArea;
