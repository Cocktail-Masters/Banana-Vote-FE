/**
 * @author mingyu
 */
import { useFeedListDummy } from "@/components/feed/__test__/useFeedListDummy";
import { FEEDS_PER_PAGE } from "@/constants/home";
import { useInfiniteQuery } from "@tanstack/react-query";

// tmp function
export const getFeedList = async (pageParam: number = 0) => {
  const START = FEEDS_PER_PAGE * pageParam;
  const END = FEEDS_PER_PAGE * (pageParam + 1);

  const tmpArr = Array.from({ length: 12 }, () => useFeedListDummy).flat();
  const items = tmpArr.slice(START, END);

  const response = {
    total_count: tmpArr.length,
    votes: items,
  };
  return response;
};

// TODO : API 호출 수정
export const feedListFetch = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/feed/a/b`
  )
    .then((response) => response.json())
    .catch((e) => e);

  console.log("RESPONSE");
  console.log(response);
  return response.res;
};

export const useFeedListQuery = ({ queryKey }: { queryKey?: string }) => {
  return useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({ pageParam = 0 }) => getFeedList(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      // find isLast?
      console.log("LAST PAGE");
      console.log(lastPage);

      const maxPage = lastPage ? lastPage.total_count : 0 / FEEDS_PER_PAGE;
      const nextPage = allPages.length + 1;
      return nextPage <= maxPage ? nextPage : undefined;
    },
  });
};
