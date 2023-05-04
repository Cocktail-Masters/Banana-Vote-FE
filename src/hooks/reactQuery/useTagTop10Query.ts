/**
 * @author mingyu
 */

import api from "@/common/axiosInstance";
import { tagTop10Dummy } from "@/components/home/__test__/tagTop10Dummy";
import { useQuery } from "@tanstack/react-query";

export const fetchTagTop10 = async () => {
  try {
    const res = await api.get(`/tags`);

    return res.data;
  } catch (e) {
    // return empty list
    return {
      tags: [],
    };
  }
};

export const useTagTop10Query = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    return fetchTagTop10();
  });
};
