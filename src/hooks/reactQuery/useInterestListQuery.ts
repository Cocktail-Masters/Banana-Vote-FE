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
    return e.response.data;
  }
};

export const useInterestListQuery = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    return fetchInterestList();
  });
};
