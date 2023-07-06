/**
 * @author mingyu
 */
import api from "@/common/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const storeCategoryListFetch = async () => {
  try {
    const response = await api.get("/goods/types");
    return response.data;
  } catch (error: any) {
    return [];
  }
};

export const useStoreCategoryListQuery = ({
  queryKey,
}: {
  queryKey: string;
}) => {
  return useQuery([queryKey], async () => {
    return storeCategoryListFetch();
  });
};
