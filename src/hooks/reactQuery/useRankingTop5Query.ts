/**
 * @author mingyu
 */

import { useQuery } from "@tanstack/react-query";
import { api } from "@/common/axiosInstance";

export const fetchRankingTop5 = async () => {
  try {
    const res = await api.get(`/ranking/1?page=${0}&size=${5}`);

    // No Contents
    if (res.status === 204) {
      // RETURN EMPTY LIST
      res.data = {
        totalPage: 0,
        nowPage: 0,
        rankingList: [],
      };
    }

    return res.data;
  } catch (e: any) {
    // return empty list
    return {
      totalPage: 0,
      nowPage: 0,
      rankingList: [],
    };
  }
};

export const useRankingTop5Query = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    return fetchRankingTop5();
  });
};
