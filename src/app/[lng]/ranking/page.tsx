import SearchInput from "@/components/ranking/SearchInput";
import SelectSeason from "@/components/ranking/SelectSeason";
import HydratedRanking from "./hydrateRanking";

const Ranking = () => {
  return (
    <div className="">
      <div className="flex w-full flex-row justify-between">
        <SelectSeason></SelectSeason>
        <SearchInput></SearchInput>
      </div>
      {/* @ts-expect-error Server Component */}
      <HydratedRanking />
    </div>
  );
};
export default Ranking;
