"use client";
import CommentInput from "./CommentInput";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import Loading from "../Loading";
import useTranslation from "@/hooks/useTranslation";
import { useParams } from "next/navigation";
import { useFetchCommentCountQuery } from "@/hooks/reactQuery/useCommentsQuery";

const LazyCommentList = dynamic(() => import("./CommentList"));

const CommentListArea = () => {
  const [opinionType, setOpinionType] = useState<"recent" | "agree">("recent");
  const params = useParams();
  const { data } = useFetchCommentCountQuery({
    queryKey: "commentCount",
    postId: parseInt(params.detail),
  });
  const { translation } = useTranslation();
  return (
    <div className={`flex min-h-[200px] w-full flex-col items-center`}>
      <div className={`mb-4 flex h-[50px] w-[95%] justify-between`}>
        <div
          className={`text-xl font-bold transition-colors duration-300 dark:text-text-normal-dark`}
        >
          {data?.opinionNumber}
          {translation("vote.detail.comment_area.count_comment")}
        </div>
        <div className={`flex h-full w-1/5 min-w-[150px] justify-end`}>
          <button
            className={`mr-2 w-16 rounded-2xl font-semibold shadow-md hover:bg-primary-yellow active:bg-secondary-orange ${
              opinionType === "agree"
                ? `bg-primary-yellow`
                : `transition-colors duration-300 dark:bg-bg-button-dark dark:text-text-normal-dark`
            }`}
            onClick={() => {
              setOpinionType("agree");
            }}
          >
            {translation("vote.detail.comment_area.sort_by_agree")}
          </button>
          <button
            className={`mr-4 w-16 rounded-2xl font-semibold shadow-md hover:bg-primary-yellow active:bg-secondary-orange ${
              opinionType === "recent"
                ? `bg-primary-yellow`
                : `transition-colors duration-300 dark:bg-bg-button-dark dark:text-text-normal-dark`
            }`}
            onClick={() => {
              setOpinionType("recent");
            }}
          >
            {translation("vote.detail.comment_area.sort_by_latest")}
          </button>
        </div>
      </div>
      <CommentInput voteId={parseInt(params.detail)} />

      <Suspense fallback={<Loading />}>
        <LazyCommentList opinionType={opinionType} />
      </Suspense>
    </div>
  );
};

export default CommentListArea;
