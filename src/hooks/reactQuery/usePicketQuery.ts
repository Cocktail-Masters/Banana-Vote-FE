import { useQuery } from "@tanstack/react-query";

export const usePicketQuery = ({
  queryKey,
  voteId,
}: {
  queryKey: string | number;
  voteId: number;
}) => {
  return useQuery({
    queryKey: [queryKey, voteId],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:3001/api/pickets/" + voteId
      );
      const res = await response.json();
      return res.res;
    },
    // suspense: true,
  });
};
