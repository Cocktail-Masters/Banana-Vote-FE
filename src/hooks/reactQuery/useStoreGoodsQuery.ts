import { DummyStoreGoodsList } from "@/components/store/__test__/DummyData";
import { useQuery } from "@tanstack/react-query";

export const useStoreGoodsQuery = ({ queryKey }: { queryKey: string }) => {
  return useQuery([queryKey], async () => {
    const response = DummyStoreGoodsList;

    return response;
  });
};
