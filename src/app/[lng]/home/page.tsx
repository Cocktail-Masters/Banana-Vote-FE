/**
 * @author mingyu
 */
import FeedListArea from "@/components/feed/FeedListArea";
import RankingListArea from "@/components/home/RankingListArea";
import RecommendArea from "@/components/home/RecommendArea";
import HydratedHome from "./hydratedHome";
import TagListArea from "@/components/home/TagListArea";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const Home = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HydratedHome>
        <div className="flex items-start justify-center xl:justify-between">
          {/* Feed List */}
          <Suspense fallback={<Loading />}>
            <FeedListArea />
          </Suspense>
          {/* Recommend, Ranking, Trending Tags */}
          <div className="hidden xl:block">
            <div className="mb-5">
              <RecommendArea />
            </div>
            <div className="my-5">
              <RankingListArea />
            </div>
            <div className="mt-5">
              <TagListArea />
            </div>
          </div>
        </div>
      </HydratedHome>
    </>
  );
};

export default Home;
