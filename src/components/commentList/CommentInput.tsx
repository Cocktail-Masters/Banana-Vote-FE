"use client";
import { useCommentMutation } from "@/hooks/reactQuery/mutation/useCommentMutation";
import { useStore } from "@/hooks/useStore";
import useTranslation from "@/hooks/useTranslation";
import { useMainStore } from "@/store";
import { useRef } from "react";
import BadgeImage from "../common/BadgeImage";

const CommentInput = ({ voteId }: { voteId: number }) => {
  const { mutate } = useCommentMutation({ voteId });
  const commentInputRef = useRef<HTMLInputElement>(null);
  const { translation } = useTranslation();
  const userInformation = useMainStore((state) => state.user);
  const isLogin = useStore(useMainStore, (state) => state.isLogin);

  const sendOpinion = () => {
    if (
      commentInputRef.current !== null &&
      commentInputRef.current.value !== undefined
    ) {
      const opinion: { voteId: number; content: string } = {
        content: commentInputRef.current.value,
        voteId: voteId,
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
      {userInformation && userInformation.id !== undefined && isLogin ? (
        <div className={`flex h-16 w-full items-center `}>
          <div className={`flex w-16`}>
            <BadgeImage
              userId={userInformation.id}
              badgeImageUrl={userInformation.badgeImageUrl}
            />
          </div>
          <div className={`flex h-16 w-full items-center p-[1%] `}>
            <input
              className={`mr-[2%] h-full w-full border-b p-2 dark:bg-black`}
              placeholder={translation(
                "vote.detail.comment_area.comment_input.placeholder"
              )}
              ref={commentInputRef}
            ></input>
            <button
              className={`flex h-2/3 min-h-[20px]  w-28 items-center justify-center rounded-2xl bg-bg-button-yellow-light p-[2%] drop-shadow-md active:bg-bg-button-yellow active:shadow-inner dark:bg-bg-button-dark`}
              onClick={sendOpinion}
            >
              {translation("vote.detail.comment_area.comment_input.submit")}
            </button>
          </div>
        </div>
      ) : (
        <div>{translation("vote.detail.comment_area.comment_input.alert")}</div>
      )}
    </div>
  );
};

export default CommentInput;
