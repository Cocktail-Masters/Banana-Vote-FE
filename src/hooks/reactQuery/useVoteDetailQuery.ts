import { useQuery } from "@tanstack/react-query";

export const voteDetailFetch = async (postId: number) => {
  const response = await fetch(
    `http://localhost:3001/api/vote/detail?` +
      new URLSearchParams({
        vote_id: String(postId),
      })
  ).then((response) => response.json());
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
      return response.res;
    },
  });
};
