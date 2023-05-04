/**
 * @author mingyu
 * @description 메인페이지에서 랭킹 리스트 표시하는 영역
 */
"use client";
import RankingBox from "./RankingBox";
import { useRankingTop5Query } from "@/hooks/reactQuery/useRankingTop5Query";
import Loading from "@/components/Loading";
import useTranslation from "@/hooks/useTranslation";
import Link from "next/link";

const RankingListArea = () => {
  const { translation } = useTranslation();

  const { isLoading, error, data } = useRankingTop5Query({
    queryKey: "rankingTop5",
  });

  return (
    <div className="mx-auto mt-4 mb-4 h-[260px] w-[360px] select-none rounded-xl bg-bg-feed drop-shadow-md dark:bg-bg-feed-dark">
      <div className="h-16 w-full">
        <div className="relative flex w-full items-center justify-between">
          <div className="h-7 w-auto" />
          {/* 박스 제목 */}
          <h5 className="absolute top-[66%] left-[50%] h-7 w-60 translate-x-[-50%] text-center text-xl font-bold text-blue-500">
            {translation("home.ranking_list_area.box_title")}
          </h5>
          {/* 더보기 */}
          <div className="relative h-7 w-auto">
            <Link href={`/rank`}>
              <p className="see-more-ranking absolute top-[66%] right-3 flex h-7 w-20 items-center justify-center text-sm text-gray-400 hover:text-gray-500 hover:decoration-solid">
                {translation("home.ranking_box.see_more")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-3 w-3 font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <hr className="mx-auto h-[1.5px] w-11/12 border-0 bg-yellow-500" />
      {isLoading || !data ? (
        <div className="mx-auto mt-10 flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <RankingBox contents={data.rankingList} />
      )}
    </div>
  );
};

export default RankingListArea;
