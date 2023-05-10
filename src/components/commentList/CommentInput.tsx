"use client";
import { useCommentMutation } from "@/hooks/reactQuery/mutation/useCommentMutation";
import useTranslation from "@/hooks/useTranslation";
import { useMainStore } from "@/store";
import { opinionType } from "@/types";
import { useRef } from "react";
import BadgeImage from "../common/BadgeImage";

const CommentInput = () => {
  const { mutate } = useCommentMutation();
  const commentInputRef = useRef<HTMLInputElement>(null);
  const { translation } = useTranslation();
  const userInformation = useMainStore((state) => state.user);
  const isLogin = useMainStore((state) => state.isLogin);

  const sendOpinion = () => {
    if (
      commentInputRef.current !== null &&
      commentInputRef.current.value !== undefined
    ) {
      const opinion: opinionType = {
        id: Math.floor(Math.random() * 1000),
        content: commentInputRef.current.value,
        agreed_number: Math.floor(Math.random() * 1000),
        disagreed_number: Math.floor(Math.random() * 100),
        writer: {
          badge_image_url: "",
          id: 1,
          nickname: "새로운 댓글이다",
        },
        created_date: "2023-03-18",
      };
      mutate(
        { sendData: opinion },
        {
          onSuccess: () => {
            if (commentInputRef.current !== null) {
              commentInputRef.current.value = "";
            }
          },
        }
      );
    }
  };
  return (
    <div className={`w-full flex-col items-center justify-center px-[2%] `}>
      {userInformation.id !== undefined ? (
        <div className={`flex h-16 w-full items-center `}>
          <div className={`flex w-16`}>
            <BadgeImage
              user_id={userInformation.id}
              badge_image_url={userInformation.badge_image_url}
            />
          </div>
          <div
            className={`flex h-16 w-full items-center p-[1%] dark:bg-bg-feed-dark`}
          >
            <input
              className={`mr-[2%] h-full w-full border-b p-2`}
              placeholder={translation(
                "vote.detail.comment_area.comment_input.placeholder"
              )}
              ref={commentInputRef}
            ></input>
            <button
              className={`flex h-2/3 min-h-[20px]  w-28 items-center justify-center rounded-2xl bg-bg-button-yellow-light p-[2%] drop-shadow-md active:bg-bg-button-yellow active:shadow-inner dark:bg-bg-button-dark`}
              onClick={sendOpinion}
            >
              등록
            </button>
          </div>
        </div>
      ) : (
        <div>로그인 후 이용 부탁드립니다.</div>
      )}
    </div>
  );
};

export default CommentInput;
