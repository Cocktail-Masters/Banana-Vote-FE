/**
 * @author mingyu
 */
import api from "@/common/axiosInstance";
import { FEEDS_PER_PAGE } from "@/constants/home";
import { useInfiniteQuery } from "@tanstack/react-query";

export const feedListFetch = async (
  pageParam: number,
  isClosed: boolean,
  sortBy: number,
  keyword: string | null
) => {
  const isTag = keyword && keyword.startsWith("#") ? true : false;

  try {
    const res = await api.get(
      `/votes/options?page=${pageParam}&size=${FEEDS_PER_PAGE}&keyword=${keyword}&is-tag=${isTag}&is-closed=${isClosed}&is-event=${false}&sort-by=${sortBy}`
    );
    return res.data;
  } catch (error) {
    return {
      totalCount: 0,
      votes: [],
    };
  }
};

export const useFeedListQuery = (
  isClosed: boolean,
  sortBy: number,
  keyword: string
) => {
  return useInfiniteQuery(
    ["feedList", isClosed, sortBy, keyword],
    async ({ pageParam = 0 }) =>
      feedListFetch(pageParam, isClosed, sortBy, keyword),
    {
      getNextPageParam: (lastPage, allPages) => {
        // find isLast
        const maxPage = lastPage ? lastPage.totalCount : 0 / FEEDS_PER_PAGE;
        const nextPage = allPages.length;

        return nextPage <= maxPage ? nextPage : undefined;
      },
      staleTime: 60 * 1000,
    }
  );
};
