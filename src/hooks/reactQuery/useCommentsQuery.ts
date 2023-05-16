import { useInfiniteQuery } from "@tanstack/react-query";

export const commentFetch = async (
  nowPageIndex: number,
  sortOption: "agree" | "recent",
  postId: number
) => {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_HOSTNAME}/api/vote/opinion/${postId}/${nowPageIndex}?sort-option=${sortOption}`
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
    getNextPageParam: (lastPage: { best: number[]; endPageIndex: number }) => {
      return lastPage == null ? undefined : lastPage.endPageIndex;
    },
  });
};
