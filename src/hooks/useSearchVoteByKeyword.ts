/**
 * @author mingyu
 * @deprecated
 */
import { useParams } from "next/navigation";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

type searchProps = {
  keyword: string;
};

const useSearchVoteByKeyword = () => {
  const urlParams = useParams();
  const router = useRouter();
  const lng = urlParams.lng;

  const routeSearchResultHandler = useCallback(
    (params: searchProps) => {
      // 태그인지 아닌지 판별
      let isTag = false;
      if (params.keyword.startsWith("#")) {
        params.keyword = params.keyword.slice(1);
        isTag = true;
      }

      // 해당 keyword 검색 결과로 push
      // window.history?.pushState(
      //   null,
      //   "",
      //   `${process.env.NEXT_PUBLIC_HOSTNAME}/${lng}/home?keyword=${params.keyword}&is-tag=${isTag}`
      // );
      router.push(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/${lng}/home?keyword=${params.keyword}&is-tag=${isTag}`
      );
    },
    [lng, router]
  );
  return { routeSearchResultHandler };
};

export default useSearchVoteByKeyword;
