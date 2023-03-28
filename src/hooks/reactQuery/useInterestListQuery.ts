/**
 * @author mingyu
 */

import { useQuery } from "@tanstack/react-query";
import { useInterestListDummy } from "../dummy/useInterestListDummy";

export const useInterestListQuery = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    // TODO : api 요청으로 데이터 받아오기
    const response = useInterestListDummy;

    return response;
  });
};
