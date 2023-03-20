/**
 * @author mingyu
 */
import { Box, Button, Center, Skeleton } from "@chakra-ui/react";
import VoteCreateBar from "../home/VoteCreateBar";
import Feed from "./Feed";
import { useFeedListQuery } from "@/hooks/useFeedListQuery";
import { Suspense, useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
    <Box alignItems={"center"} justifyContent={"center"} margin={"auto"}>
      <Box>
        {status === "loading" ? (
          /**
           * @TODO Loading 컴포넌트로 교체
           */
          <Center>Loading...</Center>
        ) : status === "error" ? (
          <Center>Error</Center>
        ) : (
          <>
            {/* 투표 생성 버튼 */}
            <Box>
              <VoteCreateBar nickname="연복이" badge_url="" />
            </Box>
            {/* 투표 피드 리스트 */}
            {data &&
              data.pages.map((page: any, index: number) => {
                return page.items.map((feedData: any, index: number) => {
                  return <Feed key={index} data={feedData} />;
                });
              })}

            <Center mt={5} mb={5}>
              {hasNextPage && (
                <Skeleton ref={ref} height="240px" width="100%" />
              )}
            </Center>
          </>
        )}
      </Box>
    </Box>
  );
};

export default FeedListArea;
