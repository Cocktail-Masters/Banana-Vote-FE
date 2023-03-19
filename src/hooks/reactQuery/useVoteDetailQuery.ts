import { useQuery } from "react-query";
import { voteDetailDummy } from "./voteDetailDummy";

export const useVoteDetailQuery = ({
  queryKey,
  postId,
}: {
  queryKey: string;
  postId: number;
}) => {
  return useQuery([queryKey, postId], async () => {
    const response = voteDetailDummy;

    return response;
  });
};
