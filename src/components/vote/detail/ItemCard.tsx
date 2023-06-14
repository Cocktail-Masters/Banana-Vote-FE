"use client";
import Image from "next/image";
import { voteItemType } from "@/types";

type imageModalType = {
  imageUrl: string;
  isOpen: boolean;
};

const VoteDetailItemCard = ({
  item,
  setSelectItem,
  selectItem,
  isParti,
  imageModalHandler,
  selectItemId,
  isOpen,
}: {
  item: voteItemType;
  setSelectItem: ({ itemId, id }: { itemId: number; id: number }) => void;
  selectItem: number | undefined;
  selectItemId: number | undefined;
  isParti: boolean | undefined;
  imageModalHandler: (e: imageModalType) => void;
  isOpen: boolean;
}) => {
  const onOpen = (e: string) => {
    imageModalHandler({ isOpen: true, imageUrl: e });
  };
  return (
    <button
      className={`mb-2 flex h-full w-full rounded-2xl border-2 shadow-md dark:text-text-normal-dark ${
        !isParti && selectItem === item.itemNumber
          ? " border-secondary-orange bg-primary-yellow dark:text-black"
          : ""
      }  ${
        !isParti &&
        `hover: cursor-pointer hover:border-secondary-orange hover:bg-primary-yellow hover:dark:text-black`
      }`}
      style={{ overflow: "hidden" }}
      onClick={() => {
        setSelectItem({ itemId: item.itemNumber, id: item.id });
      }}
    >
      <div className="relative ">
        <Image
          src={item.imageUrl}
          alt="기본 이미지"
          width="100"
          height="100"
          // fill
          className="h-24 w-24 rounded-xl object-contain"
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

      <div className="ml-2 flex w-full items-center">
        <h2 className="text-lg font-semibold">{item.title}</h2>
      </div>
    </button>
  );
};

export default VoteDetailItemCard;
