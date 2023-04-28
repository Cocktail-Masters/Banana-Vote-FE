/**
 * @author mingyu
 */

import { useQuery } from "@tanstack/react-query";
import { api } from "@/common/axiosInstance";

export const fetchRankingTop5 = async () => {
  try {
    const res = await api.get(`/ranking/1?page=${1}&size=${5}&nickname=`);
    // console.log("RESSSS");
    // console.log(res);
    // console.log(res.status);

    // No Contents
    if (res.status === 204) {
      // RETURN EMPTY LIST
    }

    return res.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const useRankingTop5Query = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    // TODO : api 요청으로 데이터 받아오기
    const response = await api.get(`/ranking/1?page=${1}&size=${5}&nickname=`);
    // console.log(response.data);
    return response.data;
  });
};
