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
import { useParams } from "next/navigation";
import useTranslation from "@/hooks/useTranslation";

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
  const { mutate } = useVoteCheckMutation({ queryKey: ["voteCheck", postId] });

  const [selectItem, setSelectItem] = useState<number | undefined>();

  const select = (itemId: number) => {
    if (itemId === selectItem) {
      setSelectItem((prev: number | undefined) => {
        return undefined;
      });
    } else {
      setSelectItem((prev: number | undefined) => {
        return itemId;
      });
    }
  };
  return (
    <div>
      {data && (
        <div className="mt-10 rounded-2xl border px-[5%] shadow-md ">
          <div className="mb-5 border-b-[5px] border-gray-200">
            <div className="flex items-center py-4">
              <div className="lg:text-md mr-2 flex-1 sm:flex-[2] md:flex-[2]">
                {data.vote.is_closed ? (
                  <span className="w-full text-red-500">
                    {/* {messages["vote"]["detail"].item.end} */}
                    {translation("vote.detail.item.end")}
                  </span>
                ) : (
                  <span className="w-full text-secondary-orange">
                    {/* {messages.vote.detail.item.ing} */}
                    {translation("vote.detail.item.ing")}
                  </span>
                )}
              </div>
              <h2 className="flex-[9] font-bold lg:flex-[20] lg:text-xl">
                {data.vote.title}
              </h2>
            </div>
            <div className="mb-3 flex items-center">
              <BadgeImage badge_image_url={data.writer.badge_image_url} />
              <div className="ml-1 text-xs">{data.writer.nickname}</div>
            </div>
          </div>
          <div>
            <div className="flex w-full justify-between">
              <div className="w-70 mb- flex">
                <p className="mr-3">
                  {/* {messages.vote.detail.item.period} */}
                  {translation("vote.detail.item.period")}
                </p>
                <p className="ml-1">
                  {getRemainDates({
                    startDate: data.vote.start_date,
                    endDate: data.vote.end_date,
                  })}
                  {/* {messages.vote.detail.item.remaining} */}
                  {translation("vote.detail.item.remaining")}
                </p>
              </div>
              <div className="w-30 flex justify-end">
                <p className="mr-1">
                  {/* {messages.vote.detail.item.hits} */}
                  {translation("vote.detail.item.hits")}
                </p>
                <p className="mr-1">{data.vote.hits}</p>
              </div>
            </div>
            <div className="mt-[25px] flex flex-col" id="voteItemCardLists">
              {data.vote_items.map((e: voteItemType, i: Key) => (
                <VoteDetailItemCard
                  key={i}
                  item={e}
                  setSelectItem={select}
                  selectItem={selectItem}
                  isParti={voteCheck?.is_participation}
                />
              ))}
            </div>
            <div className={"ml-auto text-right text-sm"}>
              {/* {messages.vote.detail.item.image_hint} */}
              {translation("vote.detail.item.image_hint")}
            </div>
            {voteCheck !== undefined && (
              <div className="mt-[25px] mb-[25px] flex w-full justify-center">
                {voteCheck.is_participation ? (
                  <button
                    onClick={onOpen}
                    className="rounded bg-secondary-orange px-4 py-2 text-black"
                  >
                    {/* {messages.vote.detail.item.predict_result} */}
                    {translation("vote.detail.item.predict_result")}
                  </button>
                ) : (
                  <button
                    disabled={selectItem === undefined}
                    onClick={() => {
                      mutate({
                        is_participation: true,
                        vote_item_id: selectItem !== undefined ? selectItem : 0,
                        point: 0,
                      });
                    }}
                    className="mt-[25px] rounded px-4 py-2 text-black"
                    style={{
                      background:
                        selectItem === undefined ? "#D9D9D9" : "#FFA45B",
                    }}
                  >
                    {/* {messages.vote.detail.item.voting} */}

                    {translation("vote.detail.item.voting")}
                  </button>
                )}
                {isOpen &&
                  voteCheck.point !== undefined &&
                  voteCheck.vote_item_id !== undefined && (
                    <VoteDetailPredictionModal
                      isOpen={isOpen}
                      onClose={onClose}
                      voteItemId={voteCheck.vote_item_id}
                      point={voteCheck.point}
                      postId={postId}
                    />
                  )}
              </div>
            )}
          </div>
          <div className="relative border-t border-gray-200 px-4 py-4 sm:px-6">
            <div className="flex h-full w-full items-center">
              <div className="w-full flex-wrap">
                {data.vote.tags.map((e: string, i: Key) => (
                  <span
                    key={i}
                    className="mr-2 inline-flex w-fit min-w-[100px] flex-shrink-0"
                  >
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-sm font-medium text-gray-800">
                      {e}
                    </span>
                  </span>
                ))}
              </div>
              <div className="ml-auto flex w-[200px]">
                <button className="mr-4 w-[70px] rounded border bg-secondary-orange py-2 px-4 font-semibold text-black shadow-md hover:bg-primary-yellow">
                  {/* {messages.vote.detail.item.delete} */}
                  {translation("vote.detail.item.delete")}
                </button>
                <button className="w-[70px] rounded border bg-red-600 py-2 px-4 font-semibold text-white shadow-md hover:bg-red-500 hover:text-white">
                  {/* {messages.vote.detail.item.declaration} */}
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
