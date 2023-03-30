import { DummyPicket } from "@/components/picket/DummyPicket";
import { useQuery } from "@tanstack/react-query";

export const useRankingQuery = ({
  queryKey,
  voteId,
}: {
  queryKey: (string | number)[];
  voteId: number;
}) => {
  return useQuery({
    queryKey: [queryKey, voteId],
    queryFn: async () => {
      const response = DummyPicket;

      return response;
    },
    suspense: true,
  });
};
