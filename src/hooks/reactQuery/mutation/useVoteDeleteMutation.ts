import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/common/axiosInstance";

const deleteVote = async ({ voteId }: { voteId: number }) => {
  const response = await api.delete(`/votes/` + voteId);
  return response;
};

const useDeleteVoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteVote,
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {},
  });
};
export default useDeleteVoteMutation;
