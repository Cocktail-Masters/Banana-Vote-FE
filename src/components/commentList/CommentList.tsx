"use client";
import { useFetchComments } from "@/hooks/reactQuery/useCommentsQuery";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Opinion from "./Opinion";
import Loading from "../Loading";
import { useParams } from "next/navigation";

const CommentList = ({ opinionType }: { opinionType: "agree" | "recent" }) => {
  const [nowPageIndex, setNowPageIndex] = useState(0);
  const queryClient = useQueryClient();
  const params = useParams();

  useEffect(() => {
    queryClient.invalidateQueries(["commentList", opinionType, 1]);
  }, [opinionType, queryClient]);

  const { data, isLoading } = useFetchComments({
    queryKey: "commentList",
    postId: parseInt(params.detail),
    nowPageIndex,
    sortOption: opinionType,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`real relative h-auto w-[95%]`}>
      {data !== undefined &&
        data.pages.map((e: any, i: number) => (
          <div className={`h-auto border-t`} key={i}>
            {Object.keys(e.opinions).map((element, index: number) => (
              <div className=" h-auto border-b pb-1" key={index}>
                <Opinion
                  opinion={e.opinions[element]}
                  voteId={parseInt(params.detail)}
                  isBest={
                    data.pages[0].best !== undefined &&
                    data.pages[0].best.some((el: number) => {
                      return el === e.opinions[element].id;
                    })
                  }
                />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default CommentList;
