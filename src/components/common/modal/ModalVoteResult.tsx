"use client";

import useTranslation from "@/hooks/useTranslation";
import BananaRain from "@/components/animation/matter/BananaRain";
import Modal from "@components/common/modal/index";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import { useVotePredictionQuery } from "@/hooks/reactQuery/useVotePrediction";
import TwoElementPrediction from "@/components/vote/TwoElementPrediction";
import MultipleElementPrediction from "@/components/vote/MultipleElementPrediction";
import { useVoteCheckQuery } from "@/hooks/reactQuery/useVoteCheckQuery";
import Image from "next/image";
import banana_svg from "@assets/icons/banana_svgrepo.com.svg";

const ModalVoteResult = () => {
  let [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const postId = Number(params.postId);
  const scene = useRef<HTMLDivElement>(null);
  const { translation } = useTranslation();
  const { data, isFetching } = useVotePredictionQuery({
    queryKey: "prediction",
    postId: postId,
  });

  const { data: voteCheck } = useVoteCheckQuery({
    queryKey: "voteCheck",
    postId: postId,
  });
  console.log(data);
  const voteItemId = voteCheck.vote_item_id;
  const point = voteCheck.point;

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        isOpen : {isOpen}
      </button>
      <div ref={scene} className="absolute left-0 right-0 z-10 h-full w-full" />
      <Modal
        className="modalContent h-full w-full max-w-2xl rounded-2xl bg-white p-3 text-black transition-colors duration-300 dark:bg-bg-feed-dark dark:text-text-normal-dark"
        isOpen={isOpen}
        onClose={() => setIsOpen((v) => !v)}
      >
        <BananaRain scene={scene} />
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
          {data !== undefined && data.items.length > 2 && (
            <div className={"text-5xl font-bold text-[#1E69FF]"}>
              {voteItemId}
              {translation("vote.detail.item.prediction_modal.no")}
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
              {voteItemId}
              {translation("vote.detail.item.prediction_modal.no")}
            </div>
          )}
          <div>
            {translation("vote.detail.item.prediction_modal.user_vote_result")}
          </div>
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
              {translation("vote.detail.item.prediction_modal.setting_point")}
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
                  {translation(
                    "vote.detail.item.prediction_modal.setting_point"
                  )}
                </button>
              )}
              {data !== undefined && data.items.length > 2 && (
                <button className="w-2/4 rounded-r-lg bg-[#1E69FF] text-white">
                  {translation("vote.detail.item.prediction_modal.submit")}
                </button>
              )}
            </div>
            <div className="mt-2 text-xs">
              {translation("vote.detail.item.prediction_modal.has_banana")}
            </div>
            <div className="flex">
              <Image src={banana_svg} alt={"바나나이미지"} width={20} />
              <div>1,234,124</div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalVoteResult;
