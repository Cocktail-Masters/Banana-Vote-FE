/**
 * @author mingyu
 */
import { Box, Center } from "@chakra-ui/react";
import VoteCreateBar from "../home/VoteCreateBar";
import Feed from "./Feed";
import { useFeedListQuery } from "@/hooks/useFeedListQuery";
import { Suspense, useEffect } from "react";

const FeedListArea = () => {
  // TODO : 데이터 불러오기
  const res = useFeedListQuery({
    queryKey: "feedList",
    pageParam: 0,
  });

  // TODO : 무한스크롤 구현
  useEffect(() => {
    console.log(res);
  }, [res]);

  return (
    <Box alignItems={"center"} justifyContent={"center"} margin={"auto"}>
      {/* 투표 생성 버튼 */}
      <Box>
        <VoteCreateBar nickname="연복이" badge_url="" />
      </Box>
      {/* 투표 피드 리스트 */}
      <Box>
        {/* {data &&
          data[0].map((feedData: any, index: number) => {
            return <Feed key={index} data={feedData} />;
          })} */}
      </Box>
    </Box>
  );
};

export default FeedListArea;
