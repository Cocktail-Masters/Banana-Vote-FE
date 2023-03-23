"use client";
/**
 * @author mingyu
 * @description 투표 항목들을 CArd 리스트 형태로 표시
 */
import VoteItem from "./VoteItem";
import { voteItemType } from "@/types";
import { useEffect, useState } from "react";

const VoteItemList = ({ vote_items }: { vote_items: voteItemType[] }) => {
  const [colNum, setColNum] = useState<number>();

  useEffect(() => {
    setColNum(vote_items && vote_items.length < 4 ? vote_items.length : 4);
  }, [vote_items]);

  return (
    <div className="flex justify-center select-none">
      <div
        className={`grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-${vote_items.length}`}
      >
        {vote_items &&
          vote_items.map((item: voteItemType, index: number) => {
            return (
              <div
                className="w-full md:w-auto md:w-full truncate drop-shadow-md"
                key={index}
                onClick={() => setColNum(5)}
              >
                <VoteItem imageLink={item.image} content={item.title} />
              </div>
            );
          })}
      </div>
      {/* TODO : 미디어쿼리 적용 안 되는 문제 해결하기 */}
      <style jsx>{`
        .grid {
          @media (min-width: 960px) {
            background-color: blue;
            grid-template-columns: repeat(
              ${vote_items && vote_items.length < 4 ? vote_items.length : 4},
              minmax(0, 1fr)
            );
          }
        }
      `}</style>
    </div>
  );
};

export default VoteItemList;
