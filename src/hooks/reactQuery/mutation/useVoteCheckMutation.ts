import getQueryClient from "@app/[lng]/getQueryClient";
import { predictionType } from "@/types";
import { useMutation } from "@tanstack/react-query";

export let voteCheckDummy: predictionType = {
  is_participation: false,
  vote_item_id: 0,
  point: 0,
};

export const useVoteCheckMutation = ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: async ({
      uri,
      sendData,
    }: {
      uri: string;
      sendData: predictionType;
    }) => {
      return (voteCheckDummy = {
        is_participation: sendData.is_participation,
        vote_item_id: sendData.vote_item_id,
        point: sendData.point,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(queryKey);
    },
  });
};
