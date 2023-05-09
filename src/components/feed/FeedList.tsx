/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @author mingyu
 */
"use client";
import VoteIcon from "@/components/animation/VoteIcon";
import useTranslation from "@/hooks/useTranslation";
import { voteFeedListType, voteFeedType } from "@/types";
import Feed from "./Feed";
import Loading from "@/components/Loading";
import { useFeedListQuery } from "@/hooks/reactQuery/useFeedListQuery";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type feedListProps = {
  filterOptions: any;
  keyword: string;
};

const FeedList = ({ filterOptions, keyword }: feedListProps) => {
  const { translation } = useTranslation();

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
    <>
      {status === "loading" ? (
        <div className="mx-auto mt-10 flex items-center justify-center">
          <Loading />
        </div>
      ) : status === "error" ? (
        <div className="mx-auto flex justify-center">ERROR</div>
      ) : (
        <>
          {keyword &&
            keyword.length > 1 &&
            data &&
            data.pages[0].votes.length > 0 && (
              <div className="flex w-full items-center justify-center py-3 text-center">
                <h3 className="text-xl lg:text-2xl">
                  <span className="font-bold">{keyword}</span>
                  {translation("feed.feed_list_area.result")}
                </h3>
              </div>
            )}
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
    </>
  );
};

export default FeedList;
