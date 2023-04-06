/**
 * @author mingyu
 */

import { useQuery } from "@tanstack/react-query";
import { useInterestListDummy } from "@components/home/__test__/useInterestListDummy";

export const fetchInterestList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/home/interest/a`
  )
    .then((response) => response.json())
    .catch((e) => e);

  return response.res;
};

export const useInterestListQuery = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    // TODO : api 요청으로 데이터 받아오기
    const response = useInterestListDummy;

    return response;
  });
};
