"use client";
import { useFetchComments } from "@/hooks/reactQuery/useCommentsQuery";
import { useEffect, useState } from "react";
import { opinionType } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import Opinion from "./Opinion";

const CommentList = ({ opinionType }: { opinionType: "agree" | "recent" }) => {
  const [nowPageIndex, setNowPageIndex] = useState(1);
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries(["commentList", opinionType, 1]);
  }, [opinionType, queryClient]);
  const { data, isFetching, isLoading } = useFetchComments({
    queryKey: "commentList",
    postId: 1,
    nowPageIndex,
    sortOption: opinionType,
  });
  if (isLoading) {
    return <>now loading</>;
  }
  return (
    <div className={`real relative w-11/12`}>
      {data !== undefined &&
        data.pages.map((e: any, i: number) => (
          <div className={``} key={i}>
            {Object.keys(e.opinions).map((element, index: number) => (
              <div key={index}>
                <Opinion opinion={e.opinions[element]} />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default CommentList;
