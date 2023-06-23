import RankingList from "@/components/ranking/RankingList.client";
import SearchInput from "@/components/ranking/SearchInput.client";
import SelectSeason from "@/components/ranking/SelectSeason.client";
import HydratedRanking from "./hydrateRanking";
import HydratedSeason from "./hydrateSeason";
import { seasonType } from "@/types";
import { getSeasonFromApi } from "@/app/api/season/route";
import { Suspense, useCallback } from "react";
import Loading from "@/components/Loading";
import { Locale } from "i18n-config";
import getSeason from "@/common/fetch/getSeason";

export type rankingParamsType = {
  seasonId: string;
  paginationIndex: string;
  lng: Locale;
};

export type rankingRouteCallbackFunctionType = {
  newSeasonId?: string;
  newPageIndex?: number;
};

export async function generateStaticParams(): Promise<
  Omit<rankingParamsType, "lng">[]
> {
  const result = await getSeason();
  return result.map((season: seasonType) => ({
    seasonId: season.id.toString(),
    paginationIndex: "0",
  }));
}

const Page = ({ params }: { params: rankingParamsType }) => {
  return (
    <div className="flex flex-col gap-[20px] pt-10">
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
