"use client";

import Loading from "@/components/Loading";
import { useVoteCheckMutation } from "@/hooks/reactQuery/mutation/useVoteCheckMutation";
import { useVoteCheckQuery } from "@/hooks/reactQuery/useVoteCheckQuery";
import { useVoteDetailQuery } from "@/hooks/reactQuery/useVoteDetailQuery";
import {
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  StackDivider,
  Heading,
  Button,
  Tag,
  useDisclosure,
} from "@chakra-ui/react";
import { Suspense, useState } from "react";
import VoteDetailPredictionModal from "../PredictionModal";
import VoteDetailItemCard from "./ItemCard";

const VoteDetailItem = () => {
  const { data } = useVoteDetailQuery({ queryKey: "voteDetail", postId: 1 });
  const { data: voteCheck } = useVoteCheckQuery({
    queryKey: "voteCheck",
    postId: 1,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <Suspense fallback={<Loading />}>
      {data && (
        <div className="px-[5%] shadow-md border mt-10 rounded-3xl ">
          <div className="border-b-[5px] border-gray-200 mb-5">
            <div className="flex items-center py-4">
              <div className="mr-4">
                {data.is_closed ? (
                  <span className="text-red-500">종료</span>
                ) : (
                  <span className="text-green-500">진행중</span>
                )}
              </div>
              <h2 className="text-2xl font-bold">{data.vote_title}</h2>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full">
              <div className="w-70 flex mb-">
                <p className="mr-3">투표 기간</p>
                <p className="ml-1">7일 남음</p>
              </div>
              <div className="w-30 flex justify-end">
                <p className="mr-1">조회수</p>
                <p className="mr-1">{data.n_view}</p>
              </div>
            </div>
            <div className="flex flex-col mt-[25px]">
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
              <div className="w-full flex justify-center mt-[25px] mb-[25px]">
                {voteCheck.is_participation ? (
                  <button
                    onClick={onOpen}
                    className="bg-secondary-orange text-black px-4 py-2 rounded"
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
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-[25px]"
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
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {e}
                    </span>
                  </span>
                ))}
              </div>
              <div className="flex">
                <button className="mr-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  수정
                </button>
                <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                  삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default VoteDetailItem;
