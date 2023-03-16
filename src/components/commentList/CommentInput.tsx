"use client";
import { useCommentMutation } from "@/hooks/reactQuery/useCommentMutation";
import { opinionType } from "@/types";
import { Flex, Button, Textarea, Text } from "@chakra-ui/react";
import { useRef } from "react";

const CommentInput = () => {
  const { mutate } = useCommentMutation({ queryKey: ["commentList"] });
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const sendOpinion = () => {
    if (
      commentInputRef.current !== null &&
      commentInputRef.current.value !== undefined
    ) {
      const opinion: opinionType = {
        id: Math.floor(Math.random() * 1000),
        content: commentInputRef.current.value,
        n_agree: Math.floor(Math.random() * 1000),
        n_disagree: Math.floor(Math.random() * 100),
        n_reported: 0,
        nickname: "새로운 댓글이다",
        date: "2023-03-18",
      };
      mutate(
        { uri: "test", sendData: opinion },
        {
          onSuccess: () => {
            console.log("안녕하세요", commentInputRef.current);
            if (commentInputRef.current !== null) {
              commentInputRef.current.value = "";
            }
          },
        }
      );
    }
  };
  return (
    <Flex w={"100%"} alignItems={"center"} flexDirection={"column"}>
      <Flex w={"95%"}>
        <Text fontSize={"xl"} fontWeight={"bold"} marginBottom={"2%"}>
          36개의 댓글
        </Text>
      </Flex>
      <Flex
        w={"98%"}
        padding={"2%"}
        height={{ base: "100px", lg: "150px" }}
        backgroundColor={"#D9D9D9"}
        rounded={"3xl"}
      >
        <Textarea
          h={"100%"}
          marginRight={"2%"}
          backgroundColor={"#F6F6F6"}
          rounded={"3xl"}
          placeholder={"나의 의견을 전해주세요"}
          resize={"none"}
          ref={commentInputRef}
        ></Textarea>
        <Button
          h={"100%"}
          padding={"2%"}
          backgroundColor={"#B6B6B6"}
          rounded={"3xl"}
          onClick={sendOpinion}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.465 0.368324C41.7675 0.993324 43.305 1.89832 44.5275 3.12082C45.7525 4.34582 46.6575 5.88082 47.2775 7.18332C48.06 8.81832 47.5525 10.7033 46.275 11.9833L28.24 30.0158C27.465 30.7908 26.52 31.3683 25.4775 31.7033L14.9225 35.0858C14.5942 35.1911 14.2432 35.2039 13.9082 35.1227C13.5731 35.0415 13.2669 34.8695 13.0233 34.6256C12.7796 34.3816 12.6079 34.0753 12.5271 33.7401C12.4462 33.405 12.4593 33.054 12.565 32.7258L15.9475 22.1733C16.2814 21.1315 16.859 20.1845 17.6325 19.4108L35.6675 1.37582C36.9475 0.0958242 38.8325 -0.409176 40.4675 0.370824L40.465 0.368324ZM40.9925 6.65832C40.3749 6.07495 39.678 5.58174 38.9225 5.19332L21.4375 22.6783C21.2598 22.8557 21.1098 23.0588 20.9925 23.2808L17.25 30.3983L24.365 26.6583C24.59 26.5408 24.7925 26.3908 24.97 26.2133L42.455 8.72832C42.0665 7.97281 41.5758 7.27593 40.9925 6.65832ZM4.9975 8.89332C4.99696 8.57399 5.11866 8.26656 5.33762 8.03412C5.55658 7.80167 5.8562 7.66185 6.175 7.64332L20 7.65582C20.663 7.65582 21.2989 7.39243 21.7678 6.92359C22.2366 6.45475 22.5 5.81887 22.5 5.15582C22.5 4.49278 22.2366 3.8569 21.7678 3.38806C21.2989 2.91922 20.663 2.65582 20 2.65582L6.25 2.64332C4.5924 2.64332 3.00269 3.3018 1.83058 4.47391C0.65848 5.64601 0 7.23572 0 8.89332V40.3358C0 42.2358 0.205 43.2983 0.7975 44.4033C1.3575 45.4508 2.1925 46.2883 3.24 46.8483C4.345 47.4383 5.405 47.6433 7.3075 47.6433H37.6925C39.5925 47.6433 40.655 47.4383 41.76 46.8483C42.81 46.2883 43.645 45.4508 44.205 44.4033C44.795 43.2983 45 42.2383 45 40.3358V27.6433C45 26.9803 44.7366 26.3444 44.2678 25.8756C43.7989 25.4067 43.163 25.1433 42.5 25.1433C41.837 25.1433 41.2011 25.4067 40.7322 25.8756C40.2634 26.3444 40 26.9803 40 27.6433V40.3358C40 41.4833 39.9475 41.7633 39.795 42.0458C39.7082 42.2143 39.571 42.3516 39.4025 42.4383C39.12 42.5883 38.84 42.6433 37.6925 42.6433H7.3075C6.16 42.6433 5.8825 42.5883 5.5975 42.4383C5.42888 42.3517 5.29163 42.2144 5.205 42.0458C5.055 41.7633 5 41.4833 5 40.3358L4.9975 8.89332Z"
              fill="black"
            />
          </svg>
        </Button>
      </Flex>
    </Flex>
  );
};

export default CommentInput;
