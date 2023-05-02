/**
 * @author mingyu
 */

import { useQuery } from "@tanstack/react-query";
import api from "@/common/axiosInstance";

export const fetchPopularList = async () => {
  try {
    const res = await api.get(`/votes/popular`);

    return res.data;
  } catch (e: any) {
    return e.response.data;
  }
};

export const usePopularListQuery = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    return fetchPopularList();
  });
};
