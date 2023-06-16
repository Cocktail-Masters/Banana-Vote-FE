import api from "@/common/axiosInstance";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const commentFetch = async (
  nowPageIndex: number,
  sortOption: "agree" | "recent",
  postId: number
) => {
  if (sortOption === "agree") {
    const res = await api(
      `/opinions/${postId}/options?page=${nowPageIndex}&size=10&sort-by=1`
    );
    // http://localhost:8080/api/v1/opinions/1/options?page=0&size=10&sort-by=2
    console.log("댓글 데이터", res.data);
    return res.data;
  } else {
    // const res = await api.get(`/opinions/7/options`, {
    //   params: {
    //     page: 0,
    //     size: 1,
    //     "sort-by": 2,
    //   },
    // });
    //localhost:8080/api/v1/opinions/7/options?page=0&size=10&sort-by=2
    //  const res = await api.get(
    //   `/opinions/${nowPageIndex}/options?page=${postId}&size=10&sort-by=2`
    // );
    const res = await api.get("/opinions/7/options?page=0&size=10&sort-by=2");

    console.log("댓글 데이터", res.data);
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
