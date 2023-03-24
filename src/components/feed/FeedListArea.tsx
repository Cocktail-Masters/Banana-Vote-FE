/**
 * @author mingyu
 */
import VoteCreateBar from "../home/VoteCreateBar";
import Feed from "./Feed";
import { useFeedListQuery } from "@/hooks/useFeedListQuery";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { voteFeedType } from "@/types";
import { voteFeedListType } from "@/types";

const FeedListArea = () => {
  /**
   * @description useInfiniteQuery를 사용한 무한 스크롤
   */
  const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useFeedListQuery({
      queryKey: "feedList",
    });

  /**
   * @description 뷰포트 최하단 도달 시 새로운 피드를 불러옴
   */
  const { ref, inView } = useInView({ threshold: 0.05 });
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView]);

  return (
    <div className="flex flex-col items-start w-full lg:w-[90%] xl:w-[800px] xl:mr-5">
      {status === "loading" ? (
        /**
         * @TODO Loading 컴포넌트로 교체
         */
        <div className="flex justify-center">Loading...</div>
      ) : status === "error" ? (
        <div className="flex justify-center">ERROR</div>
      ) : (
        <>
          {/* 투표 생성 버튼 */}
          <VoteCreateBar nickname="연복이" badge_url="" />
          {/* 투표 피드 리스트 */}
          {data &&
            data.pages.map((page: voteFeedListType, index: number) => {
              return page.items.map((feedData: voteFeedType, index: number) => {
                return <Feed key={index} data={feedData} />;
              });
            })}

          {hasNextPage && (
            // TODO : 스켈레톤 만들기
            <div
              className="flex h-100 w-full bg-gray-400 mt-5 mb-5"
              ref={ref}
            />
          )}
        </>
      )}
    </div>
  );
};

export default FeedListArea;
