"use client";
/**
 * @author mingyu
 * @description 투표 항목들을 Card 리스트 형태로 표시
 */
import VoteItem from "@/components/feed/VoteItem";
import { voteItemType } from "@/types";
import { Variants, motion } from "framer-motion";
import VS from "./VS";
import { useCallback } from "react";

type gridColumnsType = {
  [key: number]: string;
};

const gridColumns: gridColumnsType = {
  1: "relative w-full grid gap-x-4 gap-y-4 grid-cols-1",
  2: "relative w-full grid gap-x-4 gap-y-4 grid-cols-2",
  3: "relative w-full grid gap-x-3 gap-y-4 grid-cols-1 sm:grid-cols-3",
  4: "relative w-full grid gap-x-2 gap-y-4 grid-cols-2 ms:grid-cols-4",
};

const cardVariants = ({
  x = 0,
  y = 0,
}: {
  x?: number;
  y?: number;
}): Variants => {
  return {
    offscreen: {
      x,
      y,
    },
    onscreen: {
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
};

const VoteItems = ({
  vote_items,
  voteId,
}: {
  vote_items: voteItemType[];
  voteId: number;
}) => {
  const getFramerOptionOfVersus = useCallback((len: number, index: number) => {
    if (len === 2) {
      const type = index === 0 ? { x: -50 } : { x: 50 };
      const defaultOption = {
        initial: "offscreen",
        whileInView: "onscreen",
        viewport: { once: true, amount: 0.8 },
        variants: cardVariants(type),
      };
      if (index === 0) return { ...defaultOption };
      else if (index === 1) return { ...defaultOption };
    }
    return {};
  }, []);
  return (
    <>
      {vote_items.map((item: voteItemType, index: number) => {
        return (
          <div key={index} className="relative w-full">
            <motion.div
              // className={`vote-item relative w-full truncate transition duration-150 ease-in-out hover:-translate-y-1`}
              className="vote-item truncate"
              whileHover={{ scale: 1.03 }}
              {...getFramerOptionOfVersus(vote_items.length, index)}
            >
              <VoteItem
                imageLink={item.image_url}
                content={item.title}
                voteId={voteId}
              />
            </motion.div>
          </div>
        );
      })}
    </>
  );
};

const VoteItemList = ({
  vote_items,
  voteId,
}: {
  vote_items: voteItemType[];
  voteId: number;
}) => {
  return (
    <div className="relative mb-5 flex w-full select-none justify-center">
      <div
        className={
          gridColumns[(vote_items.length < 4 ? vote_items.length : 4) ?? 1]
        }
      >
        <VoteItems vote_items={vote_items} voteId={voteId} />
        {/* 요소의 갯수가 2일때 등장하는 VS */}
        {vote_items && vote_items.length === 2 && <VS />}
      </div>
    </div>
  );
};

export default VoteItemList;
