"use client";
import React from "react";
import { opinionType } from "@/types";
import BadgeImage from "../common/BadgeImage";
import { usePathname } from "next/navigation";
import { getRelativeDays } from "@/common/getRemainDates";
import { useParams } from "next/navigation";

const Opinion = ({
  opinion,
  isBest = false,
}: {
  opinion: opinionType;
  isBest?: boolean;
}) => {
  const pathname = usePathname();
  const { detail } = useParams();
  console.log(opinion.id, isBest);
  /**
   * @todo 클릭 시 사용자 프로필 이동
   */
  const handleNicknameClick = () => {
    console.log(opinion.writer.id);
  };

  return (
    <div className="relative mt-2 mb-1 flex h-auto min-h-[3.5rem] flex-col justify-center gap-2">
      {/* 프로필 */}
      <div className="flex h-full w-full flex-1 flex-wrap">
        <div className="mt-2 mr-2">
          <BadgeImage
            user_id={opinion.writer.id}
            badge_image_url={opinion.writer.badge_image_url}
          />
        </div>
        <div className="left-12 h-auto w-[80%] md:w-[90%]">
          {/* 닉네임, 날짜 표시 */}
          <div className="flex h-5">
            <h5
              className="jusitfy-center md:truncate-none mt-1 mr-2 flex h-full w-[4.5rem] cursor-pointer items-start truncate text-sm  font-semibold text-text-normal dark:text-text-normal-dark md:max-w-full"
              onClick={() => handleNicknameClick()}
            >
              {opinion.writer.nickname}
            </h5>
            <p
              className="jusitfy-center mt-1 flex h-full items-center text-xs text-gray-400"
              color="gray"
            >
              {getRelativeDays(pathname, opinion.created_date)}
            </p>
            {isBest && (
              <p className="w-6">
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
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
                    <path
                      d="M822.431 296.172c-3.469 36.542-6.416 82.255-15.612 118.355-17.246 67.718-37.5 82.61-93.818 84.015-38.805 0.968-74.218-95.471-72.953-220.768 0.833-82.372 50.497-178.063 54.715-202.37-68.419-1.181-198.916 18.234-270.479 149.873-70.659 129.97-58.109 270.825-94.286 273.265-42.58 2.872-87.903-71.043-72.953-147.179 15.084-76.812 18.64-82.934 36.477-110.384-99.337 38.149-143.654 113.724-145.906 202.372v147.177c0 203.211 163.311 367.947 364.766 367.947s364.766-164.736 364.766-367.947V443.351c-0.002-75.049-27.039-124.556-54.717-147.179z m18.238 185.506v125.716c0 173.575-146.979 314.286-328.289 314.286S184.091 780.969 184.091 607.394V481.678c-1.952-91.593 21.231-152.244 56.717-179.997-20.653 43.052-29.035 94.357-17.474 133.71 16.798 57.182 45.169 98.061 106.663 99.946 62.696 1.922 62.73-72.698 109.43-220.768 43.822-138.947 149.873-202.804 200.621-202.37-3.795 20.763-43.812 107.498-36.477 220.768 6.917 106.809 46.047 197.523 109.43 202.37 59.328 4.536 84.775-27.371 101.53-52.927 18.584-28.344 27.667-108.731 27.667-108.731s-0.959 74.94-1.529 107.999z"
                      fill="#ff0000"
                    ></path>
                  </g>
                </svg>
              </p>
            )}

            {/* 공감, 비공감, 신고 영역 */}
            <div className="absolute right-0 text-xs">
              <div className="flex h-5 w-full items-center">
                <button className="mr-2 flex h-full w-10 items-center">
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
                              stroke="#000000"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>{opinion.agreed_number}</div>
                </button>
                <button className="mr-1 flex h-full w-10 items-center">
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
                              stroke="#000000"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>{opinion.disagreed_number}</div>
                </button>
                <button className="text-base">🚨</button>
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
