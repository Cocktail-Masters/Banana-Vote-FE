import api from "@/common/axiosInstance";
import useTranslation from "@/hooks/useTranslation";
import { predictionType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const postVoteCheck = async ({
  voteItemId,
  point,
  candidateNum,
}: predictionType) => {
  const res = await api.post(
    "/votes/vote",
    { vote: { voteItemId, points: point } },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

export const useVoteCheckMutation = ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const queryClient = useQueryClient();
  const { translation } = useTranslation();

  return useMutation({
    mutationFn: postVoteCheck,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey });
      toast.success(translation("upload_success"));
    },
    onError: (error) => {
      toast.error(translation("upload_failed" + error));
    },
  });
};
