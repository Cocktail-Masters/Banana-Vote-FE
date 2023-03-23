"use client";

import { useEffect, useState } from "react";
import UploadImage from "@components/UploadImage";
import VoteItemLayout from "./VoteItemLayout";
import { voteItemTypes, voteItemType } from "./CreateVote";
import Image from "next/image";

import minus from "@assets/images/minus.svg";
import close from "@assets/images/close.png";
import React from "react";
import handleImage from "@assets/icons/handle.svg";

const VoteItemCard = ({
  voteItem,
  index,
  setVoteItems,
  onChangeHandler,
}: {
  voteItem: voteItemType;
  index: number;
  setVoteItems: React.Dispatch<React.SetStateAction<voteItemTypes>>;
  onChangeHandler: (value: string, index: number) => void;
}) => {
  const { imageFile, title } = voteItem;
  const [imageSrc, setImageSrc] = useState<string | null>("");

  const uploadImageHandler = (file: File | null) => {
    setVoteItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].imageFile = file;
      return newItems;
    });
  };

  const deleteFileHandler = () => {
    console.log("삭제");
    setImageSrc(null);
    uploadImageHandler(null);
  };

  const onClickMinusHandler = () => {
    console.log("index");
    setVoteItems((prevItems) => {
      prevItems.splice(index, 1);
      return [...prevItems];
    });
  };

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => {
        console.log(index);
        setImageSrc(reader.result ? reader.result.toString() : null);
      };
    }
  }, [imageFile, index]);

  return (
    <>
      <VoteItemLayout>
        <div className={"Card-${index} flex h-full w-full flex-row"}>
          <div className={"relative h-[120px] w-[200px]"}>
            {imageSrc && (
              <button
                className="w-30 h-30 max-w-30 max-h-30 min-w-30 min-h-30 absolute top-5 right-5 m-0 rounded-full bg-black p-2 hover:bg-black"
                onClick={deleteFileHandler}
              >
                <Image width={25} height={25} src={close} alt="close button" />
              </button>
            )}
            {!imageSrc && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <UploadImage onClickHandler={uploadImageHandler} />
              </div>
            )}
            {imageSrc && (
              <Image
                // w={200}
                // h={120}
                src={imageSrc}
                style={{ objectFit: "cover" }}
                alt="upload image"
              />
            )}
          </div>

          <div className={"h-full w-full"}>
            <input
              className={`vote-input-${index} base:text-xl h-full w-full p-5 font-bold xl:text-3xl`}
              placeholder={"내용 입력"}
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
