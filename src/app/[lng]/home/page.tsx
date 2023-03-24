/**
 * @author mingyu
 */
"use client";
import FeedListArea from "@/components/feed/FeedListArea";
import RankingListArea from "@/components/home/RankingListArea";
import RecommendArea from "@/components/home/RecommendArea";

const Home = () => {
  return (
    <div className="flex items-start justify-center xl:justify-between">
      {/* Feed List */}
      <FeedListArea />
      {/* Recommend, Ranking */}
      <div className="hidden xl:block">
        <div className="mb-5">
          <RecommendArea />
        </div>
        <div className="mt-5">
          <RankingListArea />
        </div>
      </div>
    </div>
  );
};

export default Home;
