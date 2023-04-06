import RankingList from "@/components/ranking/RankingList.client";
import SearchInput from "@/components/ranking/SearchInput.client";
import SelectSeason from "@/components/ranking/SelectSeason.client";
import HydratedRanking from "./hydrateRanking";
import HydratedSeason from "./hydrateSeason";
import { seasonType } from "@/types";
import { getSeasonFromApi } from "@/app/api/season/route";

export async function generateStaticParams() {
  const seasons = getSeasonFromApi();
  return seasons.map((season: seasonType) => ({
    seasonId: season.id.toString(),
  }));
}

const Page = ({ params }: { params: { seasonId: string } }) => {
  return (
    <div className="">
      <div className="flex w-full flex-row justify-between">
        {/* @ts-expect-error Server Component */}
        <HydratedSeason>
          <SelectSeason selectedSeasonId={params.seasonId}></SelectSeason>
        </HydratedSeason>
        <SearchInput seasonId={params.seasonId}></SearchInput>
      </div>
      {/* @ts-expect-error Server Component */}
      <HydratedRanking seasonId={params.seasonId}>
        <RankingList seasonId={params.seasonId} />
      </HydratedRanking>
    </div>
  );
};
export default Page;
