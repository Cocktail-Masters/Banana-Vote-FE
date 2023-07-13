import api from "@/common/axiosInstance";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const commentFetch = async ({
  nowPageIndex,
  sortOption,
  postId,
}: {
  nowPageIndex: number;
  sortOption: "agree" | "recent";
  postId: number;
}) => {
  if (sortOption === "agree") {
    const res = await api(
      `/opinions/${postId}/options?page=${nowPageIndex}&size=10&sort-by=1`
    );
    return res.data;
  } else {
    const res = await api(
      `/opinions/${postId}/options?page=${nowPageIndex}&size=10&sort-by=2`
    );
    return res.data;
  }
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
    const response = await commentFetch({ postId, sortOption, nowPageIndex });
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

const opinionCountFetch = async (postId: number) => {
  const response = await api(`/opinions/${postId}/count`);

  return response;
};

export const useFetchCommentCountQuery = ({
  queryKey,
  postId,
}: {
  queryKey: string;
  postId: number;
}) => {
  const fetchCount = async () => {
    const response = await opinionCountFetch(postId);
    return response.data;
  };

  return useQuery({
    queryKey: [queryKey, postId],
    queryFn: fetchCount,
  });
};
