"use client";

/**
 * @author mingyu
 * @description 메인페이지에서 랭킹 리스트 표시하는 영역
 */
import { rankDummyList } from "./dummys";
import RankingBox from "./RankingBox";

const RankingListArea = () => {
  return (
    <div className="w-[360px] h-[260px] mt-4 mb-4 mx-auto select-none bg-white drop-shadow-md rounded-xl">
      <RankingBox title={"시즌 랭킹"} contents={rankDummyList} />
    </div>
  );
};

export default RankingListArea;
