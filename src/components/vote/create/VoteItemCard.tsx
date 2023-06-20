"use client";

import { useEffect, useState } from "react";
import UploadImage from "@components/UploadImage";
import VoteItemLayout from "./VoteItemLayout";
import Image from "next/image";

import minus from "@assets/images/minus.svg";
import close from "@assets/images/close.png";
import React from "react";
import handleImage from "@assets/icons/handle.svg";
import { createVoteItemType, createVoteItemTypes } from "@/types";
import { translatedText } from "@/common/translation";
import { useParams } from "next/navigation";

const VoteItemCard = ({
  voteItem,
  index,
  setVoteItems,
  onChangeHandler,
}: {
  voteItem: createVoteItemType;
  index: number;
  setVoteItems: React.Dispatch<React.SetStateAction<createVoteItemTypes>>;
  onChangeHandler: (value: string, index: number) => void;
}) => {
  const { lng } = useParams();
  const { imageFile, title } = voteItem;
  const [imageSrc, setImageSrc] = useState<string | null>(voteItem.imageUrl);

  const uploadImageHandler = (file: File | null) => {
    setVoteItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].imageFile = file;
      return newItems;
    });
  };

  const deleteFileHandler = () => {
    setImageSrc(null);
    uploadImageHandler(null);
  };

  const onClickMinusHandler = () => {
    setVoteItems((prevItems) => {
      return prevItems.filter(
        (prevItem, prevItemIndex) => prevItemIndex !== index
      );
    });
  };

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => {
        setImageSrc(reader.result ? reader.result.toString() : null);
      };
    }
  }, [imageFile, index]);

  return (
    <>
      <VoteItemLayout>
        <div className={"Card-${index} flex h-full w-full flex-row"}>
          <div className={"relative h-[120px] w-[200px]"}>
            {!imageSrc && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <UploadImage onClickHandler={uploadImageHandler} />
              </div>
            )}
            {imageSrc && (
              <>
                <Image
                  src={imageSrc}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="upload image"
                />
                <button
                  className="w-30 h-30 max-w-30 max-h-30 min-w-30 min-h-30 absolute right-1 top-1 m-0 rounded-full bg-black p-2"
                  onClick={deleteFileHandler}
                >
                  <Image
                    width={25}
                    height={25}
                    src={close}
                    alt="close button"
                  />
                </button>
              </>
            )}
          </div>

          <div className={"h-full w-full"}>
            <input
              className={`vote-input-${index} base:text-xl focus:border-yellow h-full w-full p-5 font-bold text-text-normal outline-none xl:text-3xl `}
              placeholder={translatedText({
                lng,
                textKey: "vote.create.enter_content",
              })}
              value={title}
              onChange={(e) => onChangeHandler(e.target.value, index)}
            ></input>
          </div>
          <div className={"flex w-[30px]"} onClick={onClickMinusHandler}>
            <Image src={minus} alt="minus" width={25} height={25} />
          </div>
          <div
            className={`drag-card-icon-${index} flex w-[100px] items-center justify-center`}
          >
            <Image
              src={handleImage}
              width={25}
              height={25}
              alt={"drag handle button"}
            />
          </div>
        </div>
      </VoteItemLayout>
    </>
  );
};
export default React.memo(VoteItemCard);
