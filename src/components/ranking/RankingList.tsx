import { rankingListTypes, seasonType } from "@/types";
import DummyData from "./__test__/DummyData.json";

const RankingList = () => {
  const data: rankingListTypes = DummyData.ranking;
  return (
    <div className="">
      <table className="h-full w-full border-collapse text-[20px]">
        <thead className="relative m-2 h-16">
          {["등수", "닉네임", "포인트"].map((key, index) => {
            return (
              <td key={index} className="border-1 p-2 text-left">
                {key}
              </td>
            );
          })}
          <hr className="absolute bottom-0 left-0 h-2 w-full rounded-full bg-[#E8C254]" />
        </thead>
        <tbody className="m-2">
          {data.ranking_list.map((value, index) => {
            return (
              <>
                <tr key={index} className="text-left">
                  <th className="border-1 p-2">{value.ranking}.</th>
                  <td className="border-1 p-2">{value.nickname}</td>
                  <td className="border-1 p-2">{value.score}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default RankingList;
