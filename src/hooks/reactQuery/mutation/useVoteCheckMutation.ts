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

  console.log("vote check test: ", res);
  return res;
};

export const useVoteCheckMutation = ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      uri,
      sendData,
    }: {
      uri: string;
      sendData: predictionType;
    }) => {
      postVoteCheck(sendData);
      // return (voteCheckDummy = {
      //   is_participation: sendData.is_participation,
      //   vote_item_id: sendData.vote_item_id,
      //   point: sendData.point,
      // });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(queryKey);
    },
  });
};
