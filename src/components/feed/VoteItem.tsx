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
    <div className="w-full h-full bg-white rounded-2xl">
      <div className="m-auto w-full h-[200px] grid place-content-center overflow-hidden border border-inherit rounded-t-2xl">
        <Image
          className="w-fit h-fit m-auto rounded-2xl object-cover"
          src={!imageLink ? defaultImg : imageLink}
          alt="vote element img"
          width={1000}
          height={1000}
          onClick={(e) => handleImageClick(e)}
        />
      </div>

      <p className="w-full h-[48px] p-4 mb-2 text-center truncate font-semibold">
        {content}
      </p>
    </div>
  );
};

export default VoteItem;
