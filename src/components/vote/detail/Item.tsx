"use client";

import { useVoteCheckMutation } from "@/hooks/reactQuery/mutation/useVoteCheckMutation";
import { useVoteCheckQuery } from "@/hooks/reactQuery/useVoteCheckQuery";
import { useVoteDetailQuery } from "@/hooks/reactQuery/useVoteDetailQuery";
import { useState } from "react";
import VoteDetailPredictionModal from "../PredictionModal";
import VoteDetailItemCard from "./ItemCard";

const VoteDetailItem = () => {
  const { data } = useVoteDetailQuery({ queryKey: "voteDetail", postId: 1 });

  const { data: voteCheck } = useVoteCheckQuery({
    queryKey: "voteCheck",
    postId: 1,
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
  const { mutate } = useVoteCheckMutation({ queryKey: ["voteCheck"] });

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
              <div className="mr-4">
                {data.is_closed ? (
                  <span className="text-red-500">종료</span>
                ) : (
                  <span className="text-secondary-orange">진행중</span>
                )}
              </div>
              <h2 className="text-2xl font-bold">{data.vote_title}</h2>
            </div>
          </div>
          <div>
            <div className="flex w-full justify-between">
              <div className="w-70 mb- flex">
                <p className="mr-3">투표 기간</p>
                <p className="ml-1">7일 남음</p>
              </div>
              <div className="w-30 flex justify-end">
                <p className="mr-1">조회수</p>
                <p className="mr-1">{data.n_view}</p>
              </div>
            </div>
            <div className="mt-[25px] flex flex-col">
              {data.vote_items.map((e, i) => (
                <VoteDetailItemCard
                  key={i}
                  item={e}
                  setSelectItem={select}
                  selectItem={selectItem}
                  isParti={voteCheck?.is_participation}
                />
              ))}
            </div>
            {voteCheck !== undefined && (
              <div className="mt-[25px] mb-[25px] flex w-full justify-center">
                {voteCheck.is_participation ? (
                  <button
                    onClick={onOpen}
                    className="rounded bg-secondary-orange px-4 py-2 text-black"
                  >
                    결과 예측하기
                  </button>
                ) : (
                  <button
                    disabled={selectItem === undefined}
                    onClick={() => {
                      mutate({
                        uri: "",
                        sendData: {
                          is_participation: true,
                          vote_item_id:
                            selectItem !== undefined ? selectItem : 0,
                          point: 0,
                        },
                      });
                    }}
                    className="mt-[25px] rounded px-4 py-2 text-black"
                    style={{
                      background:
                        selectItem === undefined ? "#D9D9D9" : "#FFA45B",
                    }}
                  >
                    투표하기
                  </button>
                )}
                {isOpen && (
                  <VoteDetailPredictionModal
                    isOpen={isOpen}
                    onClose={onClose}
                  />
                )}
              </div>
            )}
          </div>
          <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex">
                {data.tag.map((e, i) => (
                  <span key={i} className="mr-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-sm font-medium text-gray-800">
                      {e}
                    </span>
                  </span>
                ))}
              </div>
              <div className="flex">
                <button className="mr-4 rounded border bg-secondary-orange py-2 px-4 font-semibold text-black shadow-md hover:bg-primary-yellow">
                  삭제
                </button>
                <button className="rounded border bg-red-600 py-2 px-4 font-semibold text-white shadow-md hover:bg-red-500 hover:text-white">
                  신고
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
