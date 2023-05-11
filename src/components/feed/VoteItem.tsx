/**
 * @author mingyu
 * @description 카드 형태로 보여지는 투표항목 하나에 대한 컴포넌트
 */
"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import defaultImg from "@assets/images/defalut_vote_element_img.png";
import ImageModal from "./ImageModal";
import useTranslation from "@/hooks/useTranslation";
import Link from "next/link";
import { useParams } from "next/navigation";

type voteFeedItemProps = {
  imageLink?: string | StaticImageData;
  content: string;
  voteId: number;
};

const VoteItem = ({
  imageLink = defaultImg,
  content,
  voteId,
}: voteFeedItemProps) => {
  const { translation } = useTranslation();
  const lng = useParams().lng;

  const [modalToggle, setModalToggle] = useState<boolean>(false);

  return (
    <Link href={`/${lng}/vote/${voteId}`}>
      <div className="group h-full w-full cursor-pointer truncate rounded-2xl">
        <div className="relative m-auto grid h-[100px] w-full place-content-center overflow-hidden rounded-t-2xl border border-border dark:border-border-dark ms:h-[150px] md:h-[200px]">
          <Image
            className="m-auto object-cover"
            src={!imageLink ? defaultImg : imageLink}
            alt="vote element img"
            onClick={() => setModalToggle(true)}
            fill={true}
          />
          <div className="absolute top-[-100%] left-0 m-auto flex h-full w-full transform items-center justify-center bg-black/75 transition-transform duration-300 ease-in-out group-hover:translate-y-full">
            <p className="flex h-auto w-full flex-wrap items-center justify-center whitespace-normal p-3 text-center text-base">
              <span className="max-w-full whitespace-normal">
                {translation("feed.feed.encourage_voting_message_front")}
              </span>
              <span className="flex-shrink-1 max-w-full whitespace-normal font-semibold text-secondary-dark-orange">
                {content}
              </span>
              <span className="">
                {translation("feed.feed.encourage_voting_message_back")}
              </span>
            </p>
          </div>
        </div>
        <div className="flex h-[48px] w-full items-center justify-center truncate rounded-b-2xl border border-border px-3 py-4 leading-[48px] dark:border-border-dark">
          <p className="w-full truncate text-center font-semibold text-text-feed dark:text-text-feed-dark">
            {content}
          </p>
        </div>
        {/* Image Modal */}
        {modalToggle && (
          <ImageModal
            setModalToggle={setModalToggle}
            imageLink={!imageLink ? defaultImg : imageLink}
          />
        )}
      </div>
    </Link>
  );
};

export default VoteItem;
