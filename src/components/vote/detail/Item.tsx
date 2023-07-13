"use client";

import { getRemainDates } from "@/common/getRemainDates";
import BadgeImage from "@/components/common/BadgeImage";
import { useVoteCheckMutation } from "@/hooks/reactQuery/mutation/useVoteCheckMutation";
import { useVoteCheckQuery } from "@/hooks/reactQuery/useVoteCheckQuery";
import { useVoteDetailQuery } from "@/hooks/reactQuery/useVoteDetailQuery";
import { Key, useState } from "react";
import VoteDetailPredictionModal from "../PredictionModal";
import VoteDetailItemCard from "./ItemCard";
import { voteItemType } from "@/types";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";
import DeclarationModal from "@/components/declaration";
import TagList from "@/components/common/tag/TagList";
import VoteDetailEndItemCard from "./endItems/EndItemCard";
import Modal from "@/components/common/modal";
import ModalHeader from "@/components/common/modal/Header";
import ModalDescription from "@/components/common/modal/Description";
import { useStore } from "@/hooks/useStore";
import { useMainStore } from "@/store";
import useDeleteVoteMutation from "@/hooks/reactQuery/mutation/useVoteDeleteMutation";

type imageModalType = {
  imageUrl: string;
  isOpen: boolean;
};

const VoteDetailItem = ({ postId }: { postId: number }) => {
  const { data } = useVoteDetailQuery({
    queryKey: "voteDetail",
    postId: postId,
  });
  const { translation } = useTranslation();
  const { data: voteCheck } = useVoteCheckQuery({
    queryKey: "voteCheck",
    postId: postId,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // 이미지 전용 모달
  const [isImageModalOpen, setIsImageModalOpen] = useState<imageModalType>({
    imageUrl: "",
    isOpen: false,
  });

  const user = useStore(useMainStore, (store) => store.user);

  const { mutate: deleteMutate } = useDeleteVoteMutation();

  const [isDeclaration, setIsDeclaration] = useState<boolean>(false);
  const declarationHandler = () => {
    // 신고 모달 닫기,열기
    setIsDeclaration((prev) => {
      return !prev;
    });
  };

  const onOpen = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };
  const onClose = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  const imageModalHandler = ({
    isOpen,
    imageUrl,
  }: {
    isOpen: boolean;
    imageUrl: string;
  }) => {
    setIsImageModalOpen((prev) => {
      return {
        isOpen,
        imageUrl,
      };
    });
  };

  const { mutate } = useVoteCheckMutation({ queryKey: ["voteCheck", postId] });

  const [selectItem, setSelectItem] = useState<number | undefined>();
  const [selectItemId, setSelectItemId] = useState<number | undefined>();

  const select = ({ itemId, id }: { itemId: number; id: number }) => {
    if (itemId === selectItem) {
      setSelectItem((prev: number | undefined) => {
        return undefined;
      });
      setSelectItemId((prev: number | undefined) => {
        return undefined;
      });
    } else {
      setSelectItem((prev: number | undefined) => {
        return itemId;
      });
      setSelectItemId((prev: number | undefined) => {
        return id;
      });
    }
  };

  return (
    <div className="h-full w-full rounded-2xl bg-bg-feed px-[5%] dark:bg-bg-feed-dark">
      {data && isDeclaration && (
        <DeclarationModal
          title={data.vote.title}
          onClose={declarationHandler}
          type={0}
          id={data.vote.id}
        />
      )}
      {data && isImageModalOpen.isOpen && (
        <Modal
          onClose={() => {
            imageModalHandler({ isOpen: false, imageUrl: "" });
          }}
          className={`relative h-[95vh] max-h-[800px] w-full max-w-[1200px] rounded-2xl bg-white text-left align-middle shadow-xl transition-all dark:bg-bg-feed-dark dark:text-text-normal-dark`}
        >
          <ModalHeader className="absolute right-0 top-0  mb-4 flex justify-center text-xl font-extrabold leading-6 text-gray-900">
            <button
              id="picketModalCloseButton"
              className={`absolute top-1 right-3 z-10`}
              onClick={() => {
                imageModalHandler({ isOpen: false, imageUrl: "" });
              }}
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
          <ModalDescription className="relative flex h-full w-full items-center justify-center">
            <div className="relative flex h-[90%] w-[90%] justify-center">
              <Image
                src={isImageModalOpen.imageUrl}
                alt="기본 이미지"
                fill
                style={{ objectFit: "contain" }}
              ></Image>
            </div>
          </ModalDescription>
        </Modal>
      )}
      {data && (
        <div className="">
          <div className="mb-5 border-b-[5px] border-gray-200">
            <div className="flex items-center py-4">
              <div className="lg:text-md mr-2 flex-1 sm:flex-[2] md:flex-[2]">
                {data.vote.isClosed ? (
                  <span className="w-full text-red-500 ">
                    {translation("vote.detail.item.end")}
                  </span>
                ) : (
                  <span className="w-full text-secondary-orange">
                    {translation("vote.detail.item.ing")}
                  </span>
                )}
              </div>
              <h2 className="flex-[9] font-bold transition-colors duration-300 dark:text-text-normal-dark lg:flex-[20] lg:text-xl">
                {data.vote.title}
              </h2>
            </div>
            <div className="mb-3 flex items-center">
              <BadgeImage
                userId={data.writer.id}
                badgeImageUrl={data.writer.badgeImageUrl}
              />
              <div className="ml-1 text-xs transition-colors duration-300 dark:text-text-normal-dark">
                {data.writer.nickname}
              </div>
            </div>
          </div>
          <div>
            <div className="flex w-full justify-between">
              <div className="w-70 mb- flex">
                <p className="mr-3 transition-colors duration-300 dark:text-text-normal-dark">
                  {translation("vote.detail.item.period")}
                </p>
                {data !== undefined && data.vote.isClosed ? (
                  <p className="ml-1 transition-colors duration-300 dark:text-text-normal-dark">
                    {translation("vote.detail.item.end")}
                  </p>
                ) : (
                  <p className="ml-1 transition-colors duration-300 dark:text-text-normal-dark">
                    {getRemainDates({
                      // startDate: data.vote.startDate,
                      endDate: data.vote.endDate,
                    })}
                    {translation("vote.detail.item.remaining")}
                  </p>
                )}
              </div>
              <div className="w-30 flex justify-end">
                <p className="mr-1 transition-colors duration-300 dark:text-text-normal-dark">
                  {translation("vote.detail.item.hits")}
                </p>
                <p className="mr-1 transition-colors duration-300 dark:text-text-normal-dark">
                  {data.vote.hits}
                </p>
              </div>
            </div>
            {!data.vote.isClosed ? (
              <div className="mt-[25px] flex flex-col" id="voteItemCardLists">
                {data.voteItems.map((e: voteItemType, i: Key) => (
                  <VoteDetailItemCard
                    key={i}
                    item={e}
                    setSelectItem={select}
                    selectItem={selectItem}
                    selectItemId={selectItemId}
                    isParti={voteCheck.participation}
                    imageModalHandler={imageModalHandler}
                    isOpen={isImageModalOpen.isOpen}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-[25px] flex flex-col" id="voteItemCardLists">
                {data.voteItems.map((e: voteItemType, i: Key) => (
                  <VoteDetailEndItemCard
                    key={i}
                    item={e}
                    totalVoted={data.vote.votedNumber}
                    imageModalHandler={imageModalHandler}
                    isOpen={isImageModalOpen.isOpen}
                  />
                ))}
              </div>
            )}
            <div
              className={
                "ml-auto text-right text-sm  transition-colors duration-300 dark:text-text-normal-dark"
              }
            >
              {translation("vote.detail.item.image_hint")}
            </div>
            {voteCheck !== undefined &&
            data !== undefined &&
            !data.vote.isClosed ? (
              <div className="mt-[25px] mb-[25px] flex w-full justify-center">
                {voteCheck.participation ? (
                  <button
                    onClick={onOpen}
                    className="rounded bg-secondary-orange px-4 py-2 text-black transition-colors duration-300 dark:text-text-normal-dark"
                  >
                    {translation("vote.detail.item.predict_result")}
                  </button>
                ) : (
                  <button
                    disabled={selectItem === undefined}
                    onClick={() => {
                      mutate({
                        voteItemId:
                          selectItemId !== undefined ? selectItemId : 0,
                        point: 0,
                      });
                    }}
                    className="mt-[25px] rounded px-4 py-2 text-black transition-colors duration-300 dark:text-text-normal-dark"
                    style={{
                      background:
                        selectItem === undefined ? "#313131" : "#FFA45B",
                    }}
                  >
                    {translation("vote.detail.item.voting")}
                  </button>
                )}
                {isOpen &&
                  voteCheck.point !== undefined &&
                  voteCheck.voteItemId !== undefined && (
                    <VoteDetailPredictionModal
                      isOpen={isOpen}
                      onClose={onClose}
                      voteItemId={voteCheck.voteItemId}
                      voteItemNumber={voteCheck.voteNumber + 1}
                      point={voteCheck.point}
                      postId={postId}
                    />
                  )}
              </div>
            ) : (
              <div className="flex h-28 w-full justify-center">
                <button>예측 결과 확인하기</button>
              </div>
            )}
          </div>
          <div className="relative border-b border-gray-200 px-4 py-4 dark:border-none sm:px-6">
            <div className="flex h-full w-full items-center">
              <div className="w-full flex-wrap">
                <TagList tags={data.vote.tags} />
              </div>
              <div className="ml-auto flex w-[200px]">
                {user !== undefined &&
                  user.role === "ADMIN" &&
                  data !== undefined && (
                    <button
                      onClick={() => {
                        deleteMutate({ voteId: data.vote.id });
                      }}
                      className="mr-4 w-[70px] rounded border bg-secondary-orange py-2 px-4 font-semibold text-black shadow-md hover:bg-primary-yellow "
                    >
                      {translation("vote.detail.item.delete")}
                    </button>
                  )}
                <button
                  onClick={declarationHandler}
                  className="ml-auto w-[70px] rounded border bg-red-600 py-2 px-4 font-semibold text-white shadow-md hover:bg-red-500 hover:text-white"
                >
                  {translation("vote.detail.item.declaration")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoteDetailItem;
