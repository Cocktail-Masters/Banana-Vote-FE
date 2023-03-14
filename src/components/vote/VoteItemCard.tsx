"use client";

import { Card, Image as ChakraImage, Stack, Input } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import UploadImage from "../UploadImage";
import VoteItemLayout from "./VoteItemLayout";
import { voteItemTypes, voteItemType } from "./CreateVote";
import Image from "next/image";

import minus from "@assets/images/minus.svg";

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
  const { imageFile, content } = voteItem;
  const [imageSrc, setImageSrc] = useState<string | null>("");

  const uploadImageHandler = (file: File) => {
    setVoteItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].imageFile = file;
      return newItems;
    });
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
        <Card
          direction={{ base: "column", sm: "row" }}
          width={"100%"}
          height={"100%"}
        >
          <Stack position={"relative"} w={"200px"} h={"120px"}>
            <Stack position="absolute" top={0} right={0}>
              <UploadImage onClickHandler={uploadImageHandler} />
            </Stack>
            {imageSrc && (
              <ChakraImage
                objectFit="cover"
                w={"200px"}
                h={"120px"}
                src={imageSrc}
                alt="upload image"
                style={{
                  margin: "auto",
                  objectFit: "contain",
                }}
              />
            )}
          </Stack>

          <Stack w={"100%"} h={"100%"}>
            <Input
              w={"100%"}
              h={"100%"}
              value={content}
              onChange={(e) => onChangeHandler(e.target.value, index)}
            ></Input>
          </Stack>
          <Stack w={"100px"} onClick={onClickMinusHandler}>
            <Image
              src={minus}
              alt="minus"
              style={{
                margin: "auto",
                objectFit: "contain",
              }}
            />
          </Stack>
        </Card>
      </VoteItemLayout>
    </>
  );
};
export default VoteItemCard;
