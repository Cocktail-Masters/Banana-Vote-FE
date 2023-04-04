/**
 * @author mingyu
 */
import VoteCreateBar from "../home/VoteCreateBar";
import Feed from "./Feed";
import { useFeedListQuery } from "@/hooks/reactQuery/useFeedListQuery";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { voteFeedType } from "@/types";
import { voteFeedListType } from "@/types";
import Loading from "./../Loading";

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
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <div className="flex w-full flex-col items-start lg:w-[90%] xl:mr-5 xl:w-[800px]">
      {status === "loading" ? (
        /**
         * @TODO Loading 컴포넌트로 교체
         */
        <div className="mx-auto mt-10 flex items-center justify-center">
          <Loading />
        </div>
      ) : status === "error" ? (
        <div className="mx-auto flex justify-center">ERROR</div>
      ) : (
        <>
          {/* 투표 생성 버튼 */}
          <VoteCreateBar badge_image_url="" />
          {/* 투표 피드 리스트 */}
          {data &&
            data.pages.map((page: voteFeedListType) => {
              return page.votes.map((feedData: voteFeedType, index: number) => {
                return <Feed key={index} data={feedData} />;
              });
            })}

          {hasNextPage && (
            // TODO : 스켈레톤 만들기
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
