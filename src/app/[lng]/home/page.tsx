/**
 * @author mingyu
 */
"use client";
import FeedListArea from "@/components/feed/FeedListArea";
import RankingListArea from "@/components/home/RankingListArea";
import RecommendArea from "@/components/home/RecommendArea";
import { Box, Flex, Skeleton, useMediaQuery } from "@chakra-ui/react";

const Home = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  return (
    <div className="flex items-start justify-between">
      {/* Feed List */}
      <FeedListArea />
      {/* Recommend, Ranking */}
      {isLargerThan1200 && (
        <div>
          <div className="mb-5">
            <RecommendArea />
          </div>
          <div className="mt-5">
            <RankingListArea />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
