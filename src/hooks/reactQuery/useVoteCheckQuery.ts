import { useQuery } from "@tanstack/react-query";
import { voteCheckDummy } from "./mutation/useVoteCheckMutation";

export const useVoteCheckQuery = ({
  queryKey,
  postId,
}: {
  queryKey: string;
  postId: number;
}) => {
  return useQuery({
    queryKey: [queryKey, postId],
    queryFn: () => {
      const response = voteCheckDummy;

      return response;
    },
  });
};
