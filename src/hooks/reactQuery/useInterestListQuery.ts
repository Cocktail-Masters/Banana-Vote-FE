/**
 * @author mingyu
 */

import { useQuery } from "@tanstack/react-query";
import api from "@/common/axiosInstance";

export const fetchInterestList = async () => {
  try {
    const res = await api.get(`/votes/interest`);

    return res.data;
  } catch (e: any) {
    // return empty list
    return {
      votes: [],
    };
  }
};

export const useInterestListQuery = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    return fetchInterestList();
  });
};
