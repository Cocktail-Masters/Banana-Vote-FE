/**
 * @author mingyu
 */

import { useQuery } from "@tanstack/react-query";
import { usePopularListDummy } from "../dummy/usePopularListDummy";

type Response = {
  items: Item[];
};

type Item = {
  vote_id: number;
  vote_title: string;
  n_view: number;
  n_prediction: number;
};

export const usePopularListQuery = ({ queryKey }: { queryKey: string }) => {
  return useQuery<Response>([queryKey], async () => {
    // TODO : api 요청으로 데이터 받아오기
    const response = usePopularListDummy;

    return response;
  });
};
