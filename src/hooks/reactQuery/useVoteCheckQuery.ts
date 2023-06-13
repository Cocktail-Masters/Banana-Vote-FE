import api from "@/common/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const voteCheckFetch = async (postId: number) => {
  const res = await api("votes/check/" + postId);
  return res;
};

export const useVoteCheckQuery = ({
  queryKey,
  postId,
}: {
  queryKey: string;
  postId: number;
}) => {
  return useQuery({
    queryKey: [queryKey, postId],
    queryFn: async () => {
      const response = await voteCheckFetch(postId);
      return response.data;
    },
  });
};
