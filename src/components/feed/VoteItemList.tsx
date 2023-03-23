/**
 * @author mingyu
 * @description 투표 항목들을 CArd 리스트 형태로 표시
 */
import VoteItem from "./VoteItem";
import { voteItemType } from "@/types";

const VoteItemList = ({ vote_items }: { vote_items: voteItemType[] }) => {
  return (
    <div className="flex justify-center select-none">
      <div
        className={`grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-${
          vote_items && vote_items.length < 4 ? vote_items.length : 4
        }`}
      >
        {vote_items &&
          vote_items.map((item: voteItemType, index: number) => {
            return (
              <div className="truncate drop-shadow-md" key={index}>
                <VoteItem imageLink={item.image} content={item.title} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default VoteItemList;
