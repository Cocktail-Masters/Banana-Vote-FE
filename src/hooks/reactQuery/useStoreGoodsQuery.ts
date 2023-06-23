/**
 * @author mingyu
 */
import api from "@/common/axiosInstance";
import { DummyStoreGoodsList } from "@/components/store/__test__/DummyData";
import { useQuery } from "@tanstack/react-query";

export const storeGoodsFetch = async () => {
  try {
    const response = await api.get(
      `/goods/list?type=${"COSMETIC"}&sortby=${1}&page=${0}&size=${10000}`
    );
    return response.data;
  } catch (error) {
    return {
      totalPage: 0,
      goodsList: [],
    };
  }
};

export const useStoreGoodsQuery = ({ queryKey }: { queryKey: string[] }) => {
  return useQuery(queryKey, async () => {
    // return storeGoodsFetch();
    return DummyStoreGoodsList;
  });
};
