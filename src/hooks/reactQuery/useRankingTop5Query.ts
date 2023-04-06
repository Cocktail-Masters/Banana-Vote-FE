/**
 * @author mingyu
 */

import { useQuery } from "@tanstack/react-query";
import { useRankingTop5Dummy } from "@/components/home/__test__/useRankingTop5Dummy";

export const fetchRankingTop5 = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/home/ranking`
  )
    .then((response) => response.json())
    .catch((e) => e);

  return response.res;
};

export const useRankingTop5Query = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    // TODO : api 요청으로 데이터 받아오기
    const response = useRankingTop5Dummy;
    return response;
  });
};
