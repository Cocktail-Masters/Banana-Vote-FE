import { useInfiniteQuery } from "@tanstack/react-query";
import { useFeedListDummy } from "./useFeedListDummy";

const DATA_PER_PAGE = 5; // tmp

const getFeedList = async (pageParam: number) => {
  const START = DATA_PER_PAGE * pageParam;
  const END = DATA_PER_PAGE * (pageParam + 1);

  const tmpArr = Array.from({ length: 6 }, () => useFeedListDummy).flat();
  const items = tmpArr.slice(START, END);

  const response = {
    totalCount: tmpArr.length,
    items: items,
  };

  return response;
};

export const useFeedListQuery = ({ queryKey }: { queryKey: string }) => {
  return useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({ pageParam = 0 }) => getFeedList(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // find isLast?
      const maxPage = lastPage.totalCount / DATA_PER_PAGE;
      const nextPage = allPages.length + 1;
      return nextPage <= maxPage ? nextPage : undefined;
    },
  });
};
