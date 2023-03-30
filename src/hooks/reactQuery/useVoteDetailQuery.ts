import { useQuery } from "@tanstack/react-query";

export const useVoteDetailQuery = ({
  queryKey,
  postId,
}: {
  queryKey: string;
  postId: number;
}) => {
  return useQuery([queryKey, postId], async () => {
    const response = await fetch(
      `http://localhost:3001/api/vote/detail?id=${postId}`
    ).then((response) => response.json());
    console.log(response);

    return response;
  });
};
