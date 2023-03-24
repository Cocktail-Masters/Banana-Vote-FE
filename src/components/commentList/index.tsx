"use client";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import Loading from "../Loading";

const LazyCommentList = dynamic(() => import("./CommentList"));

const CommentListArea = () => {
  const [opinionType, setOpinionType] = useState<"recent" | "agree">("recent");

  return (
    <div className={`flex min-h-[200px] w-full flex-col items-center`}>
      <div className={`mb-4 flex h-[50px] w-[95%] justify-between`}>
        <div className={`text-xl font-bold`}>36개의 댓글</div>
        <div className={`flex h-full w-1/5 min-w-[150px] justify-end`}>
          <button
            className={`mr-2 w-16 rounded-2xl font-semibold shadow-md hover:bg-primary-yellow active:bg-secondary-orange ${
              opinionType === "agree" ? `bg-primary-yellow` : `none`
            }`}
            onClick={() => {
              setOpinionType("agree");
            }}
          >
            공감순
          </button>
          <button
            className={`mr-4 w-16 rounded-2xl font-semibold shadow-md hover:bg-primary-yellow active:bg-secondary-orange ${
              opinionType === "recent" ? `bg-primary-yellow` : `none`
            }`}
            onClick={() => {
              setOpinionType("recent");
            }}
          >
            최신순
          </button>
        </div>
      </div>
      <CommentInput />
      <Suspense fallback={<Loading />}>
        <LazyCommentList opinionType={opinionType} />
      </Suspense>
    </div>
  );
};

export default CommentListArea;
