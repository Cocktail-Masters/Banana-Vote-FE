import { useInfiniteQuery } from "@tanstack/react-query";

export const commentFetch = async (
  nowPageIndex: number,
  sortOption: "agree" | "recent",
  postId: number
) => {
  const res = await fetch(
    new URL(
      `http://localhost:3001/api/vote/opinion/${postId}/${nowPageIndex}?sort-option=${sortOption}`
    )
  );
  return res.json();
};

export const useFetchComments = ({
  queryKey,
  postId,
  nowPageIndex = 1,
  sortOption,
}: {
  queryKey: string;
  postId: number;
  nowPageIndex?: number;
  sortOption: "agree" | "recent";
}) => {
  const fetchComments = async () => {
    const response = await commentFetch(postId, sortOption, nowPageIndex);
    return response;
  };

  return useInfiniteQuery({
    queryKey: [queryKey, sortOption, postId],
    queryFn: fetchComments,
    getNextPageParam: (lastPage) => {
      return lastPage == null ? undefined : lastPage.endPageIndex;
    },
  });
};
