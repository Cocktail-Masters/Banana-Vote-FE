/**
 * @author mingyu
 */
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type searchProps = {
  keyword: string;
  isClosed: boolean;
  sortBy: number;
};

const useSearchVoteByKeyword = () => {
  const router = useRouter();

  const routeSearchResultHandler = useCallback(
    (params: searchProps) => {
      let isTag = false;
      // 태그일 경우
      if (params.keyword.startsWith("#")) {
        isTag = true;
      }

      // router.prefetch(
      //   `${process.env.NEXT_PUBLIC_HOSTNAME}/home?keyword=${params.keyword}&is-tag=${isTag}&is-closed=${params.isClosed}&sort-by=${params.sortBy}`
      // );

      router.push(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/ko/home?keyword=${params.keyword}&is-tag=${isTag}&is-closed=${params.isClosed}&sort-by=${params.sortBy}`
      );
    },
    [router]
  );
  return { routeSearchResultHandler };
};

export default useSearchVoteByKeyword;
