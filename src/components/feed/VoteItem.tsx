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
  const handleImageClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    console.log(e);
  };

  return (
    <div className="h-full w-full rounded-2xl bg-white">
      <div className="m-auto grid h-[200px] w-full place-content-center overflow-hidden rounded-t-2xl border border-inherit">
        <Image
          className="m-auto h-fit w-fit rounded-2xl object-cover"
          src={!imageLink ? defaultImg : imageLink}
          alt="vote element img"
          width={1000}
          height={1000}
          onClick={(e) => handleImageClick(e)}
        />
      </div>

      <p className="mb-2 h-[48px] w-full truncate p-4 text-center font-semibold">
        {content}
      </p>
    </div>
  );
};

export default VoteItem;
