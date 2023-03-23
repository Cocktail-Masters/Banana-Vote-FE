"use client";

import Link from "next/link";
import goldMedal from "@assets/icons/medals/gold.svg";
import silverMedal from "@assets/icons/medals/silver.svg";
import bronzeMedal from "@assets/icons/medals/bronze.svg";
import Image from "next/image";

type rankingContents = {
  id: number;
  nickname: string;
  badge_url?: string;
};

type rankingBoxProps = {
  title: string;
  contents?: rankingContents[];
};

const RankingBox = ({ title, contents }: rankingBoxProps) => {
  return (
    <div>
      <div className="w-full h-16">
        <div className="flex relative justify-between items-center w-full">
          <div className="h-7 w-auto" />
          {/* 박스 제목 */}
          <h5 className="absolute top-[66%] left-[50%] translate-x-[-50%] text-xl font-bold w-60 h-7 text-center text-blue-500">
            {title}
          </h5>
          {/* 더보기 */}
          <div className="h-7 w-auto relative">
            <Link href={`/rank`}>
              <p className="absolute top-[66%] right-3 w-20 h-7 flex justify-center items-center text-sm text-gray-400 hover:text-gray-500 hover:decoration-solid">
                더보기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 font-bold"
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
      <hr className="w-11/12 bg-yellow-500 h-[1.5px] mx-auto border-0" />
      <div className="w-full h-52 p-4">
        {!contents || contents.length === 0 ? (
          <p className="flex justify-center font-bold h-32 leading-8">
            시즌 랭킹 정보가 없습니다.
          </p>
        ) : (
          contents.map((content: rankingContents, index: number) => {
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
                    <p className="ml-1 truncate text-base font-semibold">
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
                    <p className="ml-1 truncate text-base font-semibold">
                      {content.nickname}
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="mb-2" key={content.id}>
                  <div className="flex">
                    <p className="w-5 h-auto font-bold text-base text-center">
                      {index + 1}
                    </p>
                    <p className="ml-1 truncate font-semibold">
                      {content.nickname}
                    </p>
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
