/**
 * @author mingyu
 * @deprecated
 */
import { useRouter, useParams } from "next/navigation";
import { useCallback } from "react";

type searchProps = {
  keyword: string;
  isClosed: boolean;
  sortBy: number;
};

const useSearchVoteByKeyword = () => {
  const urlParams = useParams();
  const lng = urlParams.lng;

  const routeSearchResultHandler = useCallback(
    (params: searchProps) => {
      // 태그인지 아닌지 판별
      let isTag = false;
      if (params.keyword.startsWith("#")) {
        params.keyword = params.keyword.slice(1);
        isTag = true;
      }

      window.history?.pushState(
        null,
        "",
        `${process.env.NEXT_PUBLIC_HOSTNAME}/${lng}/home?keyword=${params.keyword}&is-tag=${isTag}&is-closed=${params.isClosed}&sort-by=${params.sortBy}`
      );
    },
    [lng]
  );
  return { routeSearchResultHandler };
};

export default useSearchVoteByKeyword;
