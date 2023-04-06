import RankingList from "@/components/ranking/RankingList.client";
import SearchInput from "@/components/ranking/SearchInput.client";
import SelectSeason from "@/components/ranking/SelectSeason.client";
import HydratedRanking from "./hydrateRanking";
import HydratedSeason from "./hydrateSeason";
import { seasonType } from "@/types";
import { getSeasonFromApi } from "@/app/api/season/route";
import { Suspense, useCallback } from "react";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";

export type rankingParamsType = {
  seasonId: string;
  paginationIndex: string;
};

export type rankingRouteCallbackFunctionType = {
  newSeasonId?: string;
  newPageIndex?: number;
};

export async function generateStaticParams(): Promise<rankingParamsType[]> {
  const seasons = getSeasonFromApi();
  return seasons.map((season: seasonType) => ({
    seasonId: season.id.toString(),
    paginationIndex: "0",
  }));
}

const Page = ({ params }: { params: rankingParamsType }) => {
  return (
    <div className="">
      <div className="flex w-full flex-row justify-between">
        {/* @ts-expect-error Server Component */}
        <HydratedSeason>
          <SelectSeason params={params}></SelectSeason>
        </HydratedSeason>
        <Suspense fallback={<Loading />}>
          <SearchInput params={params}></SearchInput>
        </Suspense>
      </div>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <HydratedRanking params={params}>
          <RankingList params={params} />
        </HydratedRanking>
      </Suspense>
    </div>
  );
};
export default Page;
