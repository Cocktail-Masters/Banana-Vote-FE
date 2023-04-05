"use client";

import banana_svg from "@assets/icons/banana_svgrepo.com.svg";
import { Fragment } from "react";
import Image from "next/image";
import { useVotePredictionQuery } from "@/hooks/reactQuery/useVotePrediction";
import TwoElementPrediction from "./TwoElementPrediction";
import MultipleElementPrediction from "./MultipleElementPrediction";
import { Dialog, Transition } from "@headlessui/react";

const VoteDetailPredictionModal = ({
  isOpen,
  onClose,
  voteItemId,
  point,
}: {
  isOpen: boolean;
  onClose: () => void;
  voteItemId: number;
  point: number;
}) => {
  // 포인트 관련해서는 recoil 완성 하고 나서 작성함.
  const { data, isFetching } = useVotePredictionQuery({
    queryKey: "prediction",
    postId: 1,
  });
  console.log(data);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel
              className={
                "modalContent h-full w-full max-w-2xl rounded-2xl bg-white p-3"
              }
            >
              <div
                className={"header relative flex items-center justify-center"}
              >
                <button
                  className={`absolute sm:right-1 lg:right-4`}
                  onClick={onClose}
                >
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
                <h1 className={"mt-4 font-bold sm:text-lg lg:text-xl"}>
                  바나나로 투표 결과를 예측하기!
                </h1>
              </div>
              <div
                className={"modal mt-5 flex w-full items-end justify-center"}
              >
                {data !== undefined && data.items.length > 2 && (
                  <div className={"text-5xl font-bold text-[#1E69FF]"}>
                    {voteItemId}번
                  </div>
                )}
                {data !== undefined && data.items.length <= 2 && (
                  <div
                    className={"text-5xl font-bold"}
                    style={{
                      color:
                        data.items !== undefined &&
                        data.items[0].vote_item_id === voteItemId &&
                        data.items[0].number === 1
                          ? "#1E69FF"
                          : "#E0008E",
                    }}
                  >
                    {voteItemId}번
                  </div>
                )}
                <div>을 투표 하셨어요!</div>
              </div>

              <div className={"flex h-3/4 w-full flex-col items-center"}>
                {data !== undefined &&
                  data.items !== undefined &&
                  data.items.length <= 2 && (
                    <TwoElementPrediction items={data.items} />
                  )}
                {data !== undefined && data.items.length > 2 && (
                  <MultipleElementPrediction items={data.items} />
                )}
                <div className="mt-auto flex w-full flex-col items-center">
                  <div className="text-xs">
                    예측에 사용할 포인트를 설정 해주세요!
                  </div>
                  <div className="mt-4 flex h-12 w-40">
                    <input
                      className="hide-spin w-3/4 rounded-l-lg bg-[#D9D9D9] p-1"
                      type="number"
                    />
                    {data !== undefined && data.items.length <= 2 && (
                      <button
                        className="w-2/4 rounded-r-lg text-white"
                        style={{
                          background:
                            data.items !== undefined &&
                            data.items[0].vote_item_id === voteItemId &&
                            data.items[0].number === 1
                              ? "#1E69FF"
                              : "#E0008E",
                        }}
                      >
                        제출
                      </button>
                    )}
                    {data !== undefined && data.items.length > 2 && (
                      <button className="w-2/4 rounded-r-lg bg-[#1E69FF] text-white">
                        제출
                      </button>
                    )}
                  </div>
                  <div className="mt-2 text-xs">가지고 있는 바나나</div>
                  <div className="flex">
                    <Image src={banana_svg} alt={"바나나이미지"} width={20} />
                    <div>1,234,124</div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VoteDetailPredictionModal;
