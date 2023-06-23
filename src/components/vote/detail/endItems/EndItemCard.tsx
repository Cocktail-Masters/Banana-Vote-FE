"use client";
import { voteItemType } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type imageModalType = {
  imageUrl: string;
  isOpen: boolean;
};

const VoteDetailEndItemCard = ({
  item,
  totalVoted,
  imageModalHandler,
  isOpen,
}: {
  item: voteItemType;
  totalVoted: number;
  imageModalHandler: (e: imageModalType) => void;
  isOpen: boolean;
}) => {
  console.log(totalVoted);
  const onOpen = (e: string) => {
    imageModalHandler({ isOpen: true, imageUrl: e });
  };
  return (
    <div
      className={` mb-2 flex h-full w-full overflow-hidden rounded-2xl border-2 bg-primary-yellow shadow-md dark:text-text-normal-dark hover:dark:text-black `}
    >
      <div className="relative flex h-full w-full">
        <div className="relative ml-[115px] flex h-[100px] w-[calc(100%_-_100px)] items-center">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: `${-100 + Math.round((item.votedNumber / totalVoted) * 100)}%`,
            }}
            transition={{ duration: 1 }}
            className={` h-full w-full rounded-2xl bg-[#81D1FF]`}
          ></motion.div>
          <h2
            className={`absolute text-base  font-semibold dark:text-black md:text-lg`}
          >
            {item.itemNumber}번 {item.title}{" "}
            {Math.round((item.votedNumber / totalVoted) * 100)}%
          </h2>
        </div>
        <div
          className={`absolute h-[100px] w-[100px]  rounded-2xl bg-white dark:bg-black`}
        >
          <Image
            src={item.imageUrl}
            alt="기본 이미지"
            fill
            className="absolute rounded-xl object-contain"
            onClick={() => {
              onOpen(item.imageUrl);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute bottom-0 right-0 h-6 w-6"
            onClick={() => {
              onOpen(item.imageUrl);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VoteDetailEndItemCard;
