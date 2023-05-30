"use client";
import getRanking from "@/common/fetch/getRanking";
import { rankingListTypes } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading";
import Pagination from "./Pagination.client";
import { useRouter, useParams } from "next/navigation";
import { rankingParamsType } from "@/app/[lng]/ranking/[seasonId]/[paginationIndex]/page";
import { translatedText } from "@/common/translation";
import useTranslation from "@/hooks/useTranslation";

export default function RankingList({ params }: { params: rankingParamsType }) {
  const { seasonId } = params;
  const paginationIndex = Number(params.paginationIndex);
  const { data, isLoading } = useQuery<rankingListTypes>({
    queryKey: ["ranking", seasonId, paginationIndex],
    queryFn: () => getRanking({ seasonId, pageNum: paginationIndex }),
  });
  const { translation } = useTranslation();
  if (isLoading) {
    return (
      <div className="flex h-[500px] w-full items-center justify-center">
        <Loading></Loading>;
      </div>
    );
  }
  return (
    <div className="rounded-2xl border-2 border-border p-10 dark:bg-bg-feed-dark">
      {data && (
        <table className="mb-8 w-full table-auto text-[20px]">
          <thead className="m-2 truncate">
            <tr className="w-full border-b-8 border-[#E8C254] text-[29px] font-bold">
              <td className="border-1 p-2 text-left">
                {translatedText({ lng: params.lng, textKey: "ranking.rank" })}
              </td>
              <td className="border-1 p-2 text-left">
                {translatedText({
                  lng: params.lng,
                  textKey: "ranking.nickname",
                })}
              </td>
              <td className="border-1 p-2 text-left">
                {translatedText({
                  lng: params.lng,
                  textKey: "ranking.point",
                })}
              </td>
            </tr>
          </thead>
          <tbody className="m-2 text-[20px]">
            {data.rankingList &&
              data.rankingList.map((value, index) => {
                return (
                  <tr key={index} className="border-b-2 text-left">
                    <td className="border-1 max-w-0 truncate p-2">
                      {value.ranking}
                    </td>
                    <td className="border-1 max-w-0 truncate p-2">
                      {value.nickname}
                    </td>
                    <td className="border-1 max-w-0 truncate p-2">
                      {value.score}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
      <div className="mb-4 flex justify-end">
        {translation("ranking.ranking_update_time")}
      </div>
      <Pagination
        totalPage={data?.totalPage}
        nowPageIndex={paginationIndex}
        params={params}
      ></Pagination>
    </div>
  );
}
