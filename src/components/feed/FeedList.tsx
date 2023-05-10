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
import { Dispatch, SetStateAction, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type feedListProps = {
  filterOptions: any;
  keyword: string;
  setKeyword?: Dispatch<SetStateAction<string>>;
};

const FeedList = ({ filterOptions, keyword, setKeyword }: feedListProps) => {
  const { translation } = useTranslation();
  const pathname = usePathname().split("/")[2];

  /**
   * @description useInfiniteQuery를 사용한 무한 스크롤
   */
  const { data, status, hasNextPage, fetchNextPage } = useFeedListQuery(
    filterOptions.isClosed,
    filterOptions.sortBy,
    keyword
  );

  /**a
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
          {/* 검색 혹은 필터링 결과에 맞는 투표글의 개수가 1 이상일 경우 라벨 */}
          {keyword &&
            keyword.length > 1 &&
            data &&
            data.pages[0].votes.length > 0 && (
              <div className="flex w-full items-center justify-center py-3 text-center">
                <h3 className="text-xl lg:text-2xl">
                  {keyword.startsWith("#") ? (
                    // 태그 클릭으로 인한 결과 표시일 경우
                    <div className="flex items-center text-center leading-7">
                      <h3 className="inline-block text-xl font-bold md:text-3xl">
                        {keyword}
                      </h3>
                      <span className="inline-block text-xl font-bold md:text-3xl">
                        &nbsp;·&nbsp;
                      </span>
                      <span className="inline-block text-base md:text-xl">
                        {data.pages[0].total_count}
                        {translation("feed.feed_list_area.num_list")}
                      </span>
                    </div>
                  ) : (
                    // 검색으로 인한 결과 표시일 경우
                    <div className="flex items-center text-center leading-7">
                      <h3 className="inline-block text-xl font-bold md:text-3xl">
                        {keyword}
                      </h3>
                      <span className="ml-1 inline-block text-base md:text-xl">
                        {translation("feed.feed_list_area.result")}
                      </span>
                    </div>
                  )}
                </h3>
              </div>
            )}
          {/* 검색 혹은 필터링 결과에 맞는 투표글의 개수가 0일 경우 라벨 */}
          {(!data || data.pages[0].votes.length === 0) && (
            <div className="flex h-auto w-full flex-col items-center justify-center pt-3">
              <div className="mb-3 h-24 w-full md:h-32">
                <VoteIcon />
              </div>
              {keyword.startsWith("#") ? (
                // 태그 클릭으로 인한 결과 표시일 경우
                <div className="flex flex-col items-center gap-2 text-center">
                  <h3 className="text-xl font-semibold md:text-3xl">
                    {keyword}&nbsp;&nbsp;
                  </h3>
                  <span className="text-sm md:text-base">
                    {translation("feed.feed_list_area.no_vote_list_title")}
                  </span>
                  {pathname === "hashtag" ? (
                    <Link href={"/home"}>
                      <button
                        className="mt-3 flex items-center justify-center rounded-xl 
                      bg-[#f2f2f2] px-5 py-3 text-base text-text-button duration-100 
                      ease-in-out hover:bg-[#4d4d4d] dark:bg-bg-button-dark 
                      dark:text-text-button-dark dark:hover:bg-[#4d4d4d]"
                      >
                        메인으로
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="mt-3 flex items-center justify-center rounded-xl 
                    bg-[#f2f2f2] px-5 py-3 text-base text-text-button duration-100 
                    ease-in-out hover:bg-[#4d4d4d] dark:bg-bg-button-dark 
                    dark:text-text-button-dark dark:hover:bg-[#4d4d4d]"
                      onClick={() => setKeyword?.("")}
                    >
                      이전으로
                    </button>
                  )}
                </div>
              ) : (
                // 검색으로 인한 결과 표시일 경우
                <div className="flex flex-col items-center justify-center text-center leading-7">
                  <h3 className="mb-2 text-xl font-semibold text-text-feed dark:text-text-feed-dark md:text-3xl">
                    {translation("feed.feed_list_area.no_vote_list_title")}
                  </h3>
                  <p className="text-sm text-text-feed dark:text-text-feed-dark md:text-base">
                    {translation(
                      "feed.feed_list_area.no_vote_list_description"
                    )}
                  </p>
                  <button
                    className="mt-3 flex items-center justify-center rounded-xl 
                    bg-[#f2f2f2] px-5 py-3 text-base text-text-button duration-100 
                    ease-in-out hover:bg-[#4d4d4d] dark:bg-bg-button-dark 
                    dark:text-text-button-dark dark:hover:bg-[#4d4d4d]"
                    onClick={() => setKeyword?.("")}
                  >
                    이전으로
                  </button>
                </div>
              )}
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
