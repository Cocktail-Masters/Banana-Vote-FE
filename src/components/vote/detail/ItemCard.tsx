"use client";
import Image from "next/image";
import defaultImg from "@assets/images/defalut_vote_element_img.png";
import { voteItemType } from "@/types";

import { useState } from "react";
import Modal from "@/components/common/modal";

const VoteDetailItemCard = ({
  item,
  setSelectItem,
  selectItem,
  isParti,
}: {
  item: voteItemType;
  setSelectItem: (itemId: number) => void;
  selectItem: number | undefined;
  isParti: boolean | undefined;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <button
      className={`mb-2 flex h-full w-full rounded-2xl border-2 shadow-md transition-colors duration-300 dark:text-text-normal-dark ${
        !isParti && selectItem === item.item_number
          ? " border-secondary-orange bg-primary-yellow dark:text-black"
          : ""
      }  ${
        !isParti &&
        `hover: cursor-pointer hover:border-secondary-orange hover:bg-primary-yellow hover:dark:text-black`
      }`}
      style={{ overflow: "hidden" }}
      onClick={() => {
        setSelectItem(item.item_number);
      }}
    >
      <Image
        src={defaultImg}
        alt="기본 이미지"
        width="100"
        height="100"
        className="w-100 h-auto rounded-xl object-contain"
        onClick={onOpen}
      />
      <div className="ml-2 flex w-full items-center">
        <h2 className="text-lg font-semibold">{item.title}</h2>
      </div>
      {isOpen && (
        <Modal onClose={onClose}>
          <Image
            src={defaultImg}
            alt="기본 이미지"
            // fill
            className="z-10 h-auto w-auto rounded-2xl object-contain"
          ></Image>
        </Modal>
      )}
    </button>
  );
};

export default VoteDetailItemCard;
