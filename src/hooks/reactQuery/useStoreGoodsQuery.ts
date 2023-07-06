/**
 * @author mingyu
 */
import api from "@/common/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const storeGoodsFetch = async (type: string, sortBy: number) => {
  try {
    const response = await api.get(
      `/goods/list?type=${type}&sortby=${sortBy}&page=${0}&size=${10000}`
    );
    return response.data;
  } catch (error) {
    return {
      totalPage: 0,
      goodsList: [],
    };
  }
};

export const useStoreGoodsQuery = (
  key: string,
  type: string,
  sortBy: number
) => {
  return useQuery([key, type, sortBy], async () =>
    storeGoodsFetch(type, sortBy)
  );
};
