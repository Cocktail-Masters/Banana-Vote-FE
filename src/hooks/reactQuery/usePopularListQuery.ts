/**
 * @author mingyu
 */

import { useQuery } from "@tanstack/react-query";
import { usePopularListDummy } from "@components/home/__test__/usePopularListDummy";

export const fetchPopularList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/home/popular/a`
  )
    .then((response) => response.json())
    .catch((e) => e);

  return response.res;
};

export const usePopularListQuery = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    // TODO : api 요청으로 데이터 받아오기
    const response = usePopularListDummy;

    return response;
  });
};
