"use client";
import React, { useState } from "react";
import { opinionType } from "@/types";
import BadgeImage from "../common/BadgeImage";
import { usePathname } from "next/navigation";
import { getRelativeDays } from "@/common/getRemainDates";
import { useParams } from "next/navigation";
import { colorStoreType, useColorModeStore } from "@/store/colorMode";
import { useCommentThumbsMutation } from "@/hooks/reactQuery/mutation/useCommentMutation";
import DeclarationModal from "../declaration";

const Opinion = ({
  opinion,
  isBest = false,
  voteId,
}: {
  voteId: number;
  opinion: opinionType;
  isBest?: boolean;
}) => {
  const pathname = usePathname();
  const { detail } = useParams();
  const [isDeclaration, setIsDeclaration] = useState<boolean>(false);
  const themeMode = useColorModeStore<colorStoreType>((state: any) => state);
  /**
   * @todo 클릭 시 사용자 프로필 이동
   */
  const handleNicknameClick = () => {
    console.log(opinion.writer.id);
  };

  const { mutate } = useCommentThumbsMutation({ voteId });

  const declarationHandler = () => {
    // 신고 모달 닫기,열기
    setIsDeclaration((prev) => {
      return !prev;
    });
  };

  return (
    <div className="relative mt-2 mb-1 flex h-auto min-h-[3.5rem] flex-col justify-center gap-2">
      {isDeclaration && (
        <DeclarationModal
          title={opinion.content}
          onClose={declarationHandler}
          type={1}
          id={voteId}
        />
      )}
      {/* 프로필 */}
      <div className="flex h-full w-full flex-1 flex-wrap">
        <div className="mt-2 mr-2">
          <BadgeImage
            userId={opinion.writer.id}
            badgeImageUrl={opinion.writer.badgeImageUrl}
          />
        </div>
        <div className="left-12 h-auto w-[80%] md:w-[90%]">
          {/* 닉네임, 날짜 표시 */}
          <div className="flex h-5 w-full">
            <div className="h-full w-14 ms:w-fit">
              <h5
                className="jusitfy-center mt-1 mr-2 flex h-full cursor-pointer items-start text-sm font-semibold text-text-normal dark:text-text-normal-dark ms:max-w-full"
                onClick={() => handleNicknameClick()}
              >
                <p className={`${detail !== undefined ? `truncate` : ""}`}>
                  {opinion.writer.nickname}
                </p>
              </h5>
            </div>

            <p
              className="jusitfy-center mt-1 flex h-full items-center text-xs text-gray-400"
              color="gray"
            >
              {getRelativeDays(pathname, opinion.createdDate)}
            </p>
            {isBest && (
              <p className="w-7">
                <svg
                  fill="#ff0000"
                  // width="64px"
                  // height="64px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ff0000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,6.009s2,4.01-1,4.01C12.838,10.019,13,3,15,2c0,0-7.655.767-9.57,7.673-.5-1.35-1.059-3.4-.43-4.666,0,0-3,2.005-3,7.017S4,22,12,22s10-4.965,10-8.974C22,7.012,17,6.009,17,6.009Z"></path>
                  </g>
                </svg>
              </p>
            )}

            {/* 공감, 비공감, 신고 영역 */}
            <div className="absolute right-0 text-xs">
              <div className="flex h-5 w-full items-center">
                <button
                  className="mr-2 flex h-full w-10 items-center"
                  onClick={() => {
                    mutate({ isAgree: true, opinionId: opinion.id });
                  }}
                >
                  <div className="w-5">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g id="Complete">
                          <g id="thumbs-up">
                            <path
                              d="M7.3,11.4,10.1,3a.6.6,0,0,1,.8-.3l1,.5a2.6,2.6,0,0,1,1.4,2.3V9.4h6.4a2,2,0,0,1,1.9,2.5l-2,8a2,2,0,0,1-1.9,1.5H4.3a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2h3v10"
                              fill="none"
                              stroke={
                                themeMode.theme === "dark"
                                  ? "#FFFFFF"
                                  : "#000000"
                              }
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>{opinion.agreedNumber}</div>
                </button>
                <button
                  className="mr-1 flex h-full w-10 items-center"
                  onClick={() => {
                    mutate({ isAgree: false, opinionId: opinion.id });
                  }}
                >
                  <div className="w-5">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title></title>
                        <g id="Complete">
                          <g id="thumbs-down">
                            <path
                              d="M7.3,12.6,10.1,21a.6.6,0,0,0,.8.3l1-.5a2.6,2.6,0,0,0,1.4-2.3V14.6h6.4a2,2,0,0,0,1.9-2.5l-2-8a2,2,0,0,0-1.9-1.5H4.3a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h3V2.6"
                              fill="none"
                              stroke={
                                themeMode.theme === "dark"
                                  ? "#FFFFFF"
                                  : "#000000"
                              }
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>{opinion.disagreedNumber}</div>
                </button>
                <button className="text-base" onClick={declarationHandler}>
                  🚨
                </button>
              </div>
            </div>
          </div>
          {/* 댓글 내용 */}
          <div className="mt-2 flex h-auto">
            <p
              className={` ${
                detail === undefined && `truncate`
              } h-auto text-sm text-text-article dark:text-text-article-dark`}
            >
              {opinion.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
