import { predictionType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const postVoteCheck = async ({
  is_participation,
  vote_item_id,
  point,
}: predictionType) => {
  const res = await fetch("http://localhost:3001/api/vote/detail/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ is_participation, vote_item_id, point }),
  });
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
