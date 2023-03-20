/**
 * @author mingyu
 */
"use client";
import FeedListArea from "@/components/feed/FeedListArea";
import RankingListArea from "@/components/home/RankingListArea";
import RecommendArea from "@/components/home/RecommendArea";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";

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
        {/* Feed List */}
        <FeedListArea />
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
