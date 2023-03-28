"use client";

/**
 * @author mingyu
 * @description 메인페이지에서 랭킹 리스트 표시하는 영역
 */
import RankingBox from "./RankingBox";
import { useRankingTop5Query } from "./../../hooks/reactQuery/useRankingTop5Query";

const RankingListArea = () => {
  const { isLoading, error, data } = useRankingTop5Query({
    queryKey: "rankingTop5",
  });

  return (
    <div className="mx-auto mt-4 mb-4 h-[260px] w-[360px] select-none rounded-xl bg-white drop-shadow-md">
      {isLoading || !data ? (
        <div className="flex justify-center">Loading...</div>
      ) : (
        <RankingBox title={"시즌 랭킹"} contents={data.ranking_list} />
      )}
    </div>
  );
};

export default RankingListArea;
