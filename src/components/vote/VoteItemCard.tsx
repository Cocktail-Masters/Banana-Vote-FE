"use client";

import {
  Card,
  Image as ChakraImage,
  Stack,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import UploadImage from "../UploadImage";
import VoteItemLayout from "./VoteItemLayout";
import { voteItemTypes, voteItemType } from "./CreateVote";
import Image from "next/image";

import minus from "@assets/images/minus.svg";
import close from "@assets/images/close.png";
import React from "react";
import { DragHandleIcon } from "@chakra-ui/icons";

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
        <Card
          direction={"row"}
          width={"100%"}
          height={"100%"}
          className={`Card-${index}`}
        >
          <Stack position={"relative"} w={"200px"} h={"120px"}>
            {imageSrc && (
              <Button
                position={"absolute"}
                top={"5px"}
                right={"5px"}
                borderRadius={"50%"}
                w={"30px"}
                h={"30px"}
                maxW={"30px"}
                maxH={"30px"}
                minW={"30px"}
                minH={"30px"}
                p={2}
                m={0}
                background={"black"}
                _hover={{ bg: "black" }}
                onClick={deleteFileHandler}
              >
                <Image
                  src={close}
                  width={25}
                  height={25}
                  alt={"close button"}
                ></Image>
              </Button>
            )}
            {!imageSrc && (
              <Stack
                position="absolute"
                top={"50%"}
                left={"50%"}
                transform={"translate(-50%, -50%)"}
              >
                <UploadImage onClickHandler={uploadImageHandler} />
              </Stack>
            )}
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
              className={`vote-input-${index}`}
              variant="unstyled"
              w={"100%"}
              h={"100%"}
              padding={5}
              fontSize={{ base: 20, xl: 28 }}
              fontWeight={700}
              placeholder={"내용 입력"}
              value={title}
              onChange={(e) => onChangeHandler(e.target.value, index)}
            ></Input>
          </Stack>
          <Stack w={"30px"} onClick={onClickMinusHandler}>
            <Image
              src={minus}
              alt="minus"
              style={{
                margin: "auto",
                objectFit: "contain",
              }}
            />
          </Stack>
          <Flex
            w={"100px"}
            justifyContent={"center"}
            alignItems={"center"}
            className={`drag-card-icon-${index}`}
          >
            <DragHandleIcon />
          </Flex>
        </Card>
      </VoteItemLayout>
    </>
  );
};
export default React.memo(VoteItemCard);
