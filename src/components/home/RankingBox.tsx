"use client";

import Link from "next/link";
import goldMedal from "@assets/icons/medals/gold.svg";
import silverMedal from "@assets/icons/medals/silver.svg";
import bronzeMedal from "@assets/icons/medals/bronze.svg";
import Image from "next/image";
import { seasonUserType } from "@/types";

type rankingBoxProps = {
  title: string;
  contents?: seasonUserType[];
};

const RankingBox = ({ title, contents }: rankingBoxProps) => {
  return (
    <div>
      <div className="h-16 w-full">
        <div className="relative flex w-full items-center justify-between">
          <div className="h-7 w-auto" />
          {/* 박스 제목 */}
          <h5 className="absolute top-[66%] left-[50%] h-7 w-60 translate-x-[-50%] text-center text-xl font-bold text-blue-500">
            {title}
          </h5>
          {/* 더보기 */}
          <div className="relative h-7 w-auto">
            <Link href={`/rank`}>
              <p className="absolute top-[66%] right-3 flex h-7 w-20 items-center justify-center text-sm text-gray-400 hover:text-gray-500 hover:decoration-solid">
                더보기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-3 w-3 font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <hr className="mx-auto h-[1.5px] w-11/12 border-0 bg-yellow-500" />
      <div className="h-52 w-full p-4">
        {!contents || contents.length === 0 ? (
          <p className="flex h-32 justify-center font-bold leading-8">
            시즌 랭킹 정보가 없습니다.
          </p>
        ) : (
          contents.map((content: seasonUserType, index: number) => {
            if (index === 0) {
              return (
                <div className="mb-2" key={content.id}>
                  <div className="flex">
                    <Image
                      src={goldMedal}
                      style={{
                        width: "20px",
                        height: "auto",
                      }}
                      alt={"gold medal"}
                    />
                    <p className="ml-1 truncate text-base font-semibold">
                      {content.nickname}
                    </p>
                  </div>
                </div>
              );
            } else if (index === 1) {
              return (
                <div className="mb-2" key={content.id}>
                  <div className="flex">
                    <Image
                      src={silverMedal}
                      style={{
                        width: "20px",
                        height: "auto",
                      }}
                      alt={"silver medal"}
                    />
                    <p className="ml-1 truncate text-base">
                      {content.nickname}
                    </p>
                  </div>
                </div>
              );
            } else if (index === 2) {
              return (
                <div className="mb-2" key={content.id}>
                  <div className="flex">
                    <Image
                      src={bronzeMedal}
                      style={{
                        width: "20px",
                        height: "auto",
                      }}
                      alt={"bronze medal"}
                    />
                    <p className="ml-1 truncate text-base">
                      {content.nickname}
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="mb-2" key={content.id}>
                  <div className="flex">
                    <p className="h-auto w-5 text-center text-base font-bold">
                      {index + 1}
                    </p>
                    <p className="ml-1 truncate">{content.nickname}</p>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default RankingBox;
