"use client";
import Image from "next/image";
import defaultImg from "@assets/images/defalut_vote_element_img.png";
import { voteItemType } from "@/types";
import Modal from "@/components/modal/Modal";
import Portal from "@/components/modal/Portal";
import { useState } from "react";

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
        <Portal>
          <Modal onClose={onClose} width={"95%"} height={"85%"}>
            <button className={"absolute right-5 top-3 z-50"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src={defaultImg}
              alt="기본 이미지"
              fill
              className="z-10 h-auto w-auto rounded-2xl object-contain"
            ></Image>
          </Modal>
        </Portal>
      )}
    </button>
  );
};

export default VoteDetailItemCard;
