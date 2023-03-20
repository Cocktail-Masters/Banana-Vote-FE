import { useInfiniteQuery, useQuery } from "react-query";
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
  return useInfiniteQuery(
    queryKey,
    async () => {
      return await getFeedList(pageParam);
    },
    {
      /**
       * @function getNextPageParam
       * @param lastPage 최근에 리턴된 페이지의 데이터 리스트
       * @param allPages
       */
      getNextPageParam: (lastPage, allPages) => {
        console.log("=== lastPage ===");
        console.log(lastPage);
        console.log("=== allPages ===");
        console.log(allPages);
        if (lastPage.length === 0) {
          return false;
        }
        return allPages.length;
      },
    }
  );
};
