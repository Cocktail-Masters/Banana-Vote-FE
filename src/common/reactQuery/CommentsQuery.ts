import { DummyComments } from "@/components/voteDetail/commentList/DummyComment";
import { useInfiniteQuery } from "react-query";

export const useFetchComments = ({
  queryKey,
  postId,
  nowPageIndex = 1,
}: {
  queryKey: string;
  postId: number;
  nowPageIndex?: number;
}) => {
  return useInfiniteQuery(
    [queryKey, postId],
    async () => {
      const response = DummyComments;

      return response;
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.isLast ? undefined : lastPage.endPageIndex;
      },
    }
  );
};
