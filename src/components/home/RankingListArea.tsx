/**
 * @author mingyu
 * @description 메인페이지에서 랭킹 리스트 표시하는 영역
 */
"use client";
import RankingBox from "./RankingBox";
import { useRankingTop5Query } from "./../../hooks/reactQuery/useRankingTop5Query";
import Loading from "@/components/Loading";

const RankingListArea = () => {
  const { isLoading, error, data } = useRankingTop5Query({
    queryKey: "rankingTop5",
  });

  return (
    <div className="mx-auto mt-4 mb-4 h-[260px] w-[360px] select-none rounded-xl bg-bg-feed drop-shadow-md dark:bg-bg-feed-dark">
      {isLoading || !data ? (
        <div className="mx-auto mt-10 flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <RankingBox title={"시즌 랭킹"} contents={data.ranking_list} />
      )}
    </div>
  );
};

export default RankingListArea;
