/**
 * @author mingyu
 */

import { useQuery } from "@tanstack/react-query";
import { useRankingListDummy } from "../dummy/useRankingListDummy";

export const useRankingTop5Query = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    // TODO : api 요청으로 데이터 받아오기
    const response = useRankingListDummy;

    return response;
  });
};
