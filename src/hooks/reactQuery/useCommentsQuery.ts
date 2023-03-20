import { DummyComments } from "@/components/commentList/DummyComment";
import { useInfiniteQuery } from "@tanstack/react-query";

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
    const response = DummyComments;

    return response;
  };

  return useInfiniteQuery({
    queryKey: [queryKey, postId],
    queryFn: fetchComments,
    getNextPageParam: (lastPage) => {
      return lastPage.isLast ? undefined : lastPage.endPageIndex;
    },
  });
};
