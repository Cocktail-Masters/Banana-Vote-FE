/**
 * @author mingyu
 */
"use client";
import RankingListArea from "@/components/home/RankingListArea";
import RecommendArea from "@/components/home/RecommendArea";
import VoteCreateBar from "@/components/home/VoteCreateBar";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Feed from "../../components/feed/Feed";
import { list } from "./DummyList";

const Page = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  return (
    <Flex width={"100%"} justifyContent={"center"}>
      <Flex
        width={"1200px"}
        height={"auto"}
        alignItems={"stretch"}
        justifyContent={"center"}
      >
        <Box alignItems={"center"} justifyContent={"center"} margin={"auto"}>
          {/* Feed List */}
          <Box>
            <VoteCreateBar nickname="연복이" badge_url="" />
          </Box>
          <Box>
            {list.map((data: any, index: number) => {
              return <Feed key={index} data={data} />;
            })}
          </Box>
        </Box>
        {/* Recommend, Ranking */}
        {isLargerThan1200 && (
          <Box>
            <Box mb={5}>
              <RecommendArea />
            </Box>
            <Box mt={5}>
              <RankingListArea />
            </Box>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Page;
