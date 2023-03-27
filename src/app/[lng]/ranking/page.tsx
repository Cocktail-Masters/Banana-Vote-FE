import Pagination from "@/components/ranking/Pagination";
import RankingList from "@/components/ranking/RankingList";
import SearchInput from "@/components/ranking/SearchInput";
import SelectSeason from "@/components/ranking/SelectSeason";

const Ranking = () => {
  return (
    <div className="">
      <div className="flex w-full flex-row justify-between">
        <SelectSeason></SelectSeason>
        <SearchInput></SearchInput>
      </div>
      <RankingList></RankingList>
      <Pagination></Pagination>
    </div>
  );
};
export default Ranking;
