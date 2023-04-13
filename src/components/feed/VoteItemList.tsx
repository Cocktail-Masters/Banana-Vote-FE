"use client";
/**
 * @author mingyu
 * @description 투표 항목들을 CArd 리스트 형태로 표시
 */
import VoteItem from "./VoteItem";
import { voteItemType } from "@/types";
import { motion } from "framer-motion";
import VS from "./VS";

const VoteItemList = ({ vote_items }: { vote_items: voteItemType[] }) => {
  return (
    <div className="flex select-none justify-center">
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2`}>
        {vote_items &&
          vote_items.map((item: voteItemType, index: number) => {
            return (
              <>
                <motion.div
                  className={`vote-item relative w-full truncate transition duration-150 ease-in-out hover:-translate-y-1`}
                  whileHover={{ scale: 1.03 }}
                  key={index}
                >
                  <VoteItem imageLink={item.image_url} content={item.title} />
                </motion.div>
                {/* 요소의 갯수가 2일때 등장하는 VS */}
                {vote_items && vote_items.length === 2 && <VS />}
              </>
            );
          })}
      </div>
      <style jsx>{`
        @media (min-width: 960px) {
          .grid {
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
