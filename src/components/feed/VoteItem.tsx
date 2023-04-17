/**
 * @author mingyu
 * @description 카드 형태로 보여지는 투표항목 하나에 대한 컴포넌트
 */
"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import defaultImg from "@assets/images/defalut_vote_element_img.png";

type voteFeedItemProps = {
  imageLink?: string | StaticImageData;
  content: string;
};

const VoteItem = ({ imageLink = defaultImg, content }: voteFeedItemProps) => {
  /**
   * @todo 이미지 클릭 시 아래 링크 참고하여 이미지 모달 띄우기 구현
   * @link https://github.com/krishnerkar/next-intercepting-routes-demo
   */
  const handleImageClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    console.log(e);
  };

  return (
    <div className="h-full w-full truncate rounded-2xl pl-2 pr-2">
      <div className="m-auto grid h-[200px] w-full place-content-center overflow-hidden rounded-t-2xl border border-border dark:border-border-dark">
        <Image
          className="m-auto h-fit w-fit rounded-2xl object-cover"
          src={!imageLink ? defaultImg : imageLink}
          alt="vote element img"
          width={1000}
          height={1000}
          onClick={(e) => handleImageClick(e)}
        />
      </div>
      <div className="flex h-[48px] w-full items-center justify-center truncate rounded-b-2xl border border-border px-3 py-4 leading-[48px] dark:border-border-dark">
        <p className="w-full truncate text-center font-semibold text-text-feed dark:text-text-feed-dark">
          {content}
        </p>
      </div>
    </div>
  );
};

export default VoteItem;
