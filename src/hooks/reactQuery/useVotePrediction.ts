import { useQuery } from "@tanstack/react-query";
import api from "@/common/axiosInstance";

export const useVotePredictionQuery = ({
  queryKey,
  postId,
}: {
  queryKey: string;
  postId: number;
}) => {
  return useQuery({
    queryKey: [queryKey, postId],
    queryFn: async () => {
      const response = await api.get(`/votes/${postId}/prediction/`);

      return response.data;
    },
  });
};
