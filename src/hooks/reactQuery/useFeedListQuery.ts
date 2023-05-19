/**
 * @author mingyu
 */
import { useFeedListDummy } from "@/components/feed/__test__/useFeedListDummy";
import { FEEDS_PER_PAGE } from "@/constants/home";
import { voteFeedListType } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";

// tmp function
export const getFeedList = (
  pageParam: number = 0,
  isClosed: boolean,
  sortBy: number,
  keyword: string | null
) => {
  const START = FEEDS_PER_PAGE * pageParam;
  const END = FEEDS_PER_PAGE * (pageParam + 1);

  // 더미 데이터 생성
  const dummyArr = Array.from({ length: 12 }, () => useFeedListDummy).flat();

  // 종료 포함 여부, 키워드에 따라 더미 데이터 필터링
  const filteredArr = isClosed
    ? dummyArr.filter((element) => {
        if (keyword) return element.vote.title.includes(keyword);
        else return true;
      })
    : dummyArr.filter((element) => {
        if (keyword)
          return (
            element.vote.isClosed === false &&
            element.vote.title.includes(keyword)
          );
        return element.vote.isClosed === false;
      });

  //

  // 정렬 순서에 따라 더미 데이터 정렬
  let sortedArr: any;
  if (sortBy === 1) {
    // 최신 순
    sortedArr = filteredArr.sort((a, b) => {
      return (
        new Date(b.vote.startDate).getTime() -
        new Date(a.vote.startDate).getTime()
      );
    });
  } else if (sortBy === 2) {
    // 참여 순 (인기 순)
    sortedArr = filteredArr.sort((a, b) => {
      return b.vote.votedNumber - a.vote.votedNumber;
    });
  } else if (sortBy === 3) {
    // 조회 순
    sortedArr = filteredArr.sort((a, b) => {
      return b.vote.hits - a.vote.hits;
    });
  } else if (sortBy === 4) {
    // 댓글 많은 순
    sortedArr = filteredArr.sort((a, b) => {
      return b.vote.opinionNumber - a.vote.opinionNumber;
    });
  } else {
    sortedArr = filteredArr;
  }

  const items = sortedArr.slice(START, END);
  const response = {
    totalCount: filteredArr.length,
    votes: items,
  };

  return response;
};

// TODO : API 호출 수정
export const feedListFetch = async (
  isClosed: boolean,
  sortBy: number,
  keyword: string | null
) => {
  const isTag = keyword && keyword.startsWith("#") ? true : false;

  let response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/feed?keyword=${keyword}&is-tag=${isTag}&is-closed=${isClosed}&sort-by=${sortBy}`
  )
    .then((response) => response.json())
    .catch((e) => e);

  // * Vercel Build 오류로 예외처리 하드코딩
  // if (!response || !response.res) {
  //   response = {
  //     res: {
  //       totalCount: 0,
  //       votes: [],
  //     },
  //   };
  // }
  return response.res;
};

export const useFeedListQuery = (
  isClosed: boolean,
  sortBy: number,
  keyword: string
) => {
  return useInfiniteQuery({
    queryKey: ["feedList", isClosed, sortBy, keyword],
    /**
     * @todo getFeedList에 isClosed, sortBy 파라미터로 넣기
     */
    queryFn: ({ pageParam = 0 }) =>
      getFeedList(pageParam, isClosed, sortBy, keyword),
    getNextPageParam: (lastPage, allPages) => {
      // find isLast?
      const maxPage = lastPage ? lastPage.totalCount : 0 / FEEDS_PER_PAGE;
      const nextPage = allPages.length + 1;
      return nextPage <= maxPage ? nextPage : undefined;
    },
  });
};
