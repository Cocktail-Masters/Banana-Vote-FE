import api from "@/common/axiosInstance";
import { predictionType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const postVoteCheck = async ({ voteItemId, point }: predictionType) => {
  const res = await api.post(
    "/votes/vote",
    { voteItemId, point },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(res);
  return res;
};

export const useVoteCheckMutation = ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postVoteCheck,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};
