/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @author mingyu
 */
"use client";
import VoteCreateBar from "../home/VoteCreateBar";
import Feed from "./Feed";
import { useFeedListQuery } from "@/hooks/reactQuery/useFeedListQuery";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { filterOptions, voteFeedType } from "@/types";
import { voteFeedListType } from "@/types";
import Loading from "@/components/Loading";
import VoteSearchBar from "@/components/home/VoteSearchBar";
import VoteIcon from "@/components/animation/VoteIcon";
import useTranslation from "@/hooks/useTranslation";

const FeedListArea = () => {
  const { translation } = useTranslation();

  const [keyword, setKeyword] = useState<string>(""); // 검색 키워드
  const [filterOptions, setFilterOptions] = useState<filterOptions>({
    isClosed: false, // 종료 투표 포함 여부
    sortBy: 1, // 1 : 최신순, 2 : 참여순(인기순), 3 : 조회순, 4 : 댓글 많은 순
  });

  /**
   * @description useInfiniteQuery를 사용한 무한 스크롤
   */
  const { data, status, hasNextPage, fetchNextPage } = useFeedListQuery(
    filterOptions.isClosed,
    filterOptions.sortBy,
    keyword
  );

  /**
   * @description 뷰포트 최하단 도달 시 새로운 피드를 불러옴
   */
  const { ref, inView } = useInView({ threshold: 0.05 });
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <div className="flex w-full flex-col items-start lg:w-[90%] xl:mr-5 xl:w-[800px]">
      {status === "loading" ? (
        <div className="mx-auto mt-10 flex items-center justify-center">
          <Loading />
        </div>
      ) : status === "error" ? (
        <div className="mx-auto flex justify-center">ERROR</div>
      ) : (
        <>
          {/* Search & Filter Bar */}
          <VoteSearchBar
            setKeyword={setKeyword}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
          {/* Create Bar */}
          <VoteCreateBar badge_image_url="" />
          {/* 투표 피드 리스트 */}
          {(!data || data.pages[0].votes.length === 0) && (
            <div className="flex h-auto w-full flex-col items-center justify-center pt-3">
              <div className="mb-3 h-24 w-full md:h-32">
                <VoteIcon />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-text-feed dark:text-text-feed-dark md:text-3xl">
                {translation("feed.feed_list_area.no_vote_list_title")}
              </h3>
              <p className="text-sm text-text-feed dark:text-text-feed-dark md:text-base">
                {translation("feed.feed_list_area.no_vote_list_description")}
              </p>
            </div>
          )}
          {data &&
            data.pages.map((page: voteFeedListType) => {
              return page.votes?.map(
                (feedData: voteFeedType, index: number) => {
                  return <Feed key={index} data={feedData} />;
                }
              );
            })}

          {hasNextPage && (
            /**
             * @todo 스켈레톤 만들기
             */
            <div className="h-100 mt-5 mb-5 flex w-full" ref={ref}>
              <Loading />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FeedListArea;
