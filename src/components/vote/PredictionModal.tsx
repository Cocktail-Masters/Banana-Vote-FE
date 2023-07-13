"use client";

import banana_svg from "@assets/icons/banana_svgrepo.com.svg";
import Image from "next/image";
import { useVotePredictionQuery } from "@/hooks/reactQuery/useVotePrediction";
import TwoElementPrediction from "./TwoElementPrediction";
import MultipleElementPrediction from "./MultipleElementPrediction";
import useTranslation from "@/hooks/useTranslation";
import Modal from "../common/modal";
import { useStore } from "@/hooks/useStore";
import { useMainStore } from "@/store";
import { usePredictionMutation } from "@/hooks/reactQuery/mutation/usePredictionMutation";
import { useState } from "react";

const VoteDetailPredictionModal = ({
  isOpen,
  onClose,
  voteItemNumber,
  voteItemId,
  postId,
}: {
  isOpen: boolean;
  onClose: () => void;
  voteItemId: number;
  voteItemNumber: number;
  point: number;
  postId: number;
}) => {
  // 포인트 관련해서는 recoil 완성 하고 나서 작성함.
  const { data, isFetching } = useVotePredictionQuery({
    queryKey: "prediction",
    postId: postId,
  });
  const [pointState, setPointState] = useState<number>(0);

  const { mutate } = usePredictionMutation({
    queryKey: ["prediction", postId],
  });

  const userInfo = useStore(useMainStore, (state) => state.user);
  const store = useStore(useMainStore, (state) => state);

  const { translation } = useTranslation();
  const pointSubmitHandler = () => {
    if (pointState !== undefined) {
      mutate(
        { prediction: { points: pointState, voteItemId: voteItemId } },
        {
          onSuccess: () => {
            if (store !== undefined && userInfo) {
              store.setUserInfo({
                ...userInfo,
                points: userInfo.points - pointState,
              });
            }
          },
        }
      );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="modalContent h-full w-full max-w-2xl rounded-2xl bg-white p-3 text-black transition-colors duration-300 dark:bg-bg-feed-dark dark:text-text-normal-dark"
    >
      <div className={"header relative flex items-center justify-center"}>
        <button
          id="modalCloseButton"
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
          {translation("vote.detail.item.prediction_modal.title")}
        </h1>
      </div>
      <div className={"modal mt-5 flex w-full items-end justify-center"}>
        {data !== undefined && data.predictions.length > 2 && (
          <div className={"text-5xl font-bold text-[#1E69FF]"}>
            {voteItemNumber}
            {translation("vote.detail.item.prediction_modal.no")}
          </div>
        )}
        {data !== undefined && data.predictions.length <= 2 && (
          <div
            className={"text-5xl font-bold"}
            style={{
              color:
                data.predictions !== undefined &&
                data.predictions[0].voteItemNumber + 1 === voteItemNumber &&
                data.predictions[0].voteItemNumber === 0
                  ? "#1E69FF"
                  : "#E0008E",
            }}
          >
            {voteItemNumber}
            {translation("vote.detail.item.prediction_modal.no")}
          </div>
        )}
        <div>
          {translation("vote.detail.item.prediction_modal.user_vote_result")}
        </div>
      </div>

      <div className={"flex h-3/4 w-full flex-col items-center"}>
        {data !== undefined &&
          data.predictions !== undefined &&
          data.predictions.length <= 2 && (
            <TwoElementPrediction items={data.predictions} />
          )}
        {data !== undefined && data.predictions.length > 2 && (
          <MultipleElementPrediction items={data.predictions} />
        )}
        <div className="mt-auto flex w-full flex-col items-center">
          <div className="text-xs">
            {translation("vote.detail.item.prediction_modal.setting_point")}
          </div>
          <div className="mt-4 flex h-12 w-40">
            <input
              className="hide-spin w-3/4 rounded-l-lg bg-[#D9D9D9] p-1 text-black"
              onChange={(e) => {
                if (
                  e.target.value !== undefined &&
                  e.target.value.split(" ").length > 0 &&
                  !isNaN(Number(e.target.value))
                ) {
                  setPointState(parseInt(e.target.value));
                }
              }}
            />
            {data !== undefined && data.predictions.length <= 2 && (
              <button
                className="w-2/4 rounded-r-lg text-white"
                style={{
                  background:
                    data.predictions !== undefined &&
                    data.predictions[0].voteItemNumber + 1 === voteItemNumber &&
                    data.predictions[0].voteItemNumber === 0
                      ? "#1E69FF"
                      : "#E0008E",
                }}
                onClick={pointSubmitHandler}
              >
                {translation("vote.detail.item.prediction_modal.submit")}
              </button>
            )}
            {data !== undefined && data.predictions.length > 2 && (
              <button
                className="w-2/4 rounded-r-lg bg-[#1E69FF] text-white"
                onClick={pointSubmitHandler}
              >
                {translation("vote.detail.item.prediction_modal.submit")}
              </button>
            )}
          </div>
          <div className="mt-2 text-xs">
            {translation("vote.detail.item.prediction_modal.has_banana")}
          </div>
          <div className="flex">
            <Image src={banana_svg} alt={"바나나이미지"} width={20} />
            <div>{userInfo && userInfo.points}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VoteDetailPredictionModal;
