import { rankingListTypes } from "@/types";
import DummyData from "./__test__/DummyData.json";

const RankingList = () => {
  const data: rankingListTypes = DummyData.ranking;
  return (
    <div>
      <div>rankingList</div>
      <div>{data.total_page}</div>
      <div>
        {data.ranking_list.map((v) => {
          return <div key={v.user_id}>{v.nickname}</div>;
        })}
      </div>
    </div>
  );
};
export default RankingList;
