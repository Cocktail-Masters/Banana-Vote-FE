import api from "@/common/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const usePicketQuery = ({
  queryKey,
  voteId,
}: {
  queryKey: string | number;
  voteId: number;
}) => {
  return useQuery({
    queryKey: [queryKey, voteId],
    queryFn: async () => {
      const response = await api.get(`pickets/` + String(voteId));
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 204) {
        return response.data;
      }
      return response;
    },
    suspense: true,
  });
};
