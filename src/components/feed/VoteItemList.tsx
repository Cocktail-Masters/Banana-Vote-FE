"use client";
/**
 * @author mingyu
 * @description 투표 항목들을 Card 리스트 형태로 표시
 */
import VoteItem from "@/components/feed/VoteItem";
import { voteItemType } from "@/types";
import { motion } from "framer-motion";

type gridColumnsType = {
  [key: number]: string;
};

const gridColumns: gridColumnsType = {
  1: "relative w-full grid gap-x-4 gap-y-4 grid-cols-1",
  2: "relative w-full grid gap-x-4 gap-y-4 grid-cols-2",
  3: "relative w-full grid gap-x-3 gap-y-4 grid-cols-3",
  4: "relative w-full grid gap-x-2 gap-y-4 grid-cols-4",
};

const VoteItemList = ({ vote_items }: { vote_items: voteItemType[] }) => {
  return (
    <div className="relative mb-5 flex w-full select-none justify-center">
      <div
        className={
          gridColumns[(vote_items.length < 4 ? vote_items.length : 4) ?? 1]
        }
      >
        {vote_items &&
          vote_items.map((item: voteItemType, index: number) => {
            return (
              <div key={index} className="relative w-full ">
                <motion.div
                  className={`vote-item relative w-full truncate transition duration-150 ease-in-out hover:-translate-y-1`}
                  whileHover={{ scale: 1.03 }}
                >
                  <VoteItem imageLink={item.image_url} content={item.title} />
                </motion.div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default VoteItemList;
