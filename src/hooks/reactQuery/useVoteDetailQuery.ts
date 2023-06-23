import api from "@/common/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const voteDetailFetch = async (postId: number) => {
  const response = await api.get(`/votes/${postId}`).then((response) => {
    return response;
  });
  console.log(response);

  return response;
};

export const useVoteDetailQuery = ({
  queryKey,
  postId,
}: {
  queryKey: string;
  postId: number;
}) => {
  return useQuery({
    queryKey: [queryKey, postId],
    queryFn: async () => {
      const response = await voteDetailFetch(postId);
      return response;
    },
  });
};
