"use client";

import Modal from "@/components/common/modal";
import ModalDescription from "@/components/common/modal/Description";
import ModalHeader from "@/components/common/modal/Header";
import { voteItemType } from "@/types";
import Image from "next/image";
import { useState } from "react";

const VoteDetailEndItemCard = ({
  item,
  total_voted,
}: {
  item: voteItemType;
  total_voted: number;
}) => {
  console.log(total_voted);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={`mb-2 flex h-full w-full rounded-2xl border-2 bg-primary-yellow shadow-md transition-colors duration-300 dark:text-text-normal-dark hover:dark:text-black `}
    >
      <div>
        <div className="relative">
          <Image
            src={item.image_url}
            alt="기본 이미지"
            width="100"
            height="100"
            className="w-100 h-auto rounded-xl object-contain"
            onClick={onOpen}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute bottom-0 right-0 h-6 w-6"
            onClick={onOpen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
      </div>
      <div className="ml-2 flex w-full items-center">
        <div className={`bg-[#81D1FF]`}>asgasdg</div>
        <h2 className="text-lg font-semibold">
          {item.item_number}번 {item.title}
        </h2>
      </div>
      {isOpen && (
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
              src={item.image_url}
              alt="기본 이미지"
              fill
              style={{ objectFit: "contain" }}
              // className="rounded-2xl"
            ></Image>
          </ModalDescription>
        </Modal>
      )}
    </div>
  );
};

export default VoteDetailEndItemCard;
