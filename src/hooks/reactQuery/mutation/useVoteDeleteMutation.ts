import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/common/axiosInstance";
import useTranslation from "@/hooks/useTranslation";
import { toast } from "react-toastify";

const deleteVote = async ({ voteId }: { voteId: number }) => {
  const response = await api.delete(`/votes/` + voteId);
  return response;
};

const useDeleteVoteMutation = () => {
  const queryClient = useQueryClient();
  const { translation } = useTranslation();
  return useMutation({
    mutationFn: deleteVote,
    onSuccess: (data) => {
      toast.success(translation("delete_success"));
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(translation("delete_failed" + error));
    },
  });
};
export default useDeleteVoteMutation;
