import { useInfiniteQuery } from "@tanstack/react-query";
import { useFeedListDummy } from "./useFeedListDummy";

const getFeedList = async (pageParam: number) => {
  const DATA_PER_PAGE = 5; // tmp
  const START = DATA_PER_PAGE * pageParam;
  const END = DATA_PER_PAGE * (pageParam + 1);

  const tmpArr = Array.from({ length: 100 }, () => useFeedListDummy).flat();
  const response = tmpArr.slice(START, END);

  return response;
};

export const useFeedListQuery = ({
  queryKey,
  pageParam,
}: {
  queryKey: string;
  pageParam: number;
}) => {
  return useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({ pageParam = 0 }) => getFeedList(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      console.log("=== lastPage ===");
      console.log(lastPage);
      console.log("=== allPages ===");
      console.log(allPages);
    },
  });
};
