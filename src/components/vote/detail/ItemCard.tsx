"use client";
import Image from "next/image";
import defaultImg from "@assets/images/defalut_vote_element_img.png";
import { voteItemType } from "@/types";

import { useState } from "react";
import Modal from "@/components/common/modal";
import ModalDescription from "@/components/common/modal/Description";
import ModalHeader from "@/components/common/modal/Header";

type imageModalType = {
  image_url: string;
  isOpen: boolean;
};

const VoteDetailItemCard = ({
  item,
  setSelectItem,
  selectItem,
  isParti,
  imageModalHandler,
  isOpen,
}: {
  item: voteItemType;
  setSelectItem: (itemId: number) => void;
  selectItem: number | undefined;
  isParti: boolean | undefined;
  imageModalHandler: (e: imageModalType) => void;
  isOpen: boolean;
}) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const onOpen = () => {
  //   setIsOpen(true);
  // };
  // const onClose = () => {
  //   setIsOpen(false);
  // };
  const onOpen = (e: string) => {
    imageModalHandler({ isOpen: true, image_url: e });
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
      <div className="relative">
        <Image
          src={defaultImg}
          alt="기본 이미지"
          width="100"
          height="100"
          className="w-100 h-auto rounded-xl object-contain"
          onClick={() => {
            onOpen(
              "https://cdn.discordapp.com/attachments/433506654009425921/1021417880207753237/unknown.png"
            );
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
            onOpen(
              "https://cdn.discordapp.com/attachments/433506654009425921/1021417880207753237/unknown.png"
            );
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      </div>

      <div className="ml-2 flex w-full items-center">
        <h2 className="text-lg font-semibold">{item.title}</h2>
      </div>
      {/* {isOpen && (
        <Modal
          onClose={onClose}
          className={`relative h-[95vh] max-h-[800px] w-full max-w-[1200px] rounded-2xl bg-white text-left align-middle shadow-xl transition-all dark:bg-bg-feed-dark dark:text-text-normal-dark`}
        >
          <ModalHeader className="absolute right-0 top-0 z-10 mb-4 flex justify-center text-xl font-extrabold leading-6 text-gray-900">
            <button
              id="picketModalCloseButton"
              className={`absolute top-1 right-3`}
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 transition-colors duration-300 dark:text-text-normal-dark"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </ModalHeader>
          <ModalDescription className="relative flex h-full w-full justify-center">
            <Image
              src={defaultImg}
              alt="기본 이미지"
              fill
              style={{ objectFit: "contain" }}
              // className="rounded-2xl"
            ></Image>
          </ModalDescription>
        </Modal>
      )} */}
    </button>
  );
};

export default VoteDetailItemCard;
