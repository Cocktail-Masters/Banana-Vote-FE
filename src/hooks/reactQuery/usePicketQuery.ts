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
        process.env.NEXT_PUBLIC_HOSTNAME + "/api/pickets/" + voteId
      );
      const res = await response.json();
      return res.res;
    },
    // suspense: true,
  });
};
