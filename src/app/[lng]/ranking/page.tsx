import Pagination from "@/components/ranking/Pagination";
import RankingList from "@/components/ranking/RankingList";
import SearchInput from "@/components/ranking/SearchInput";
import SelectSeason from "@/components/ranking/SelectSeason";

const Ranking = () => {
  return (
    <>
      <SearchInput></SearchInput>
      <SelectSeason></SelectSeason>
      <RankingList></RankingList>
      <Pagination></Pagination>
    </>
  );
};
export default Ranking;
