import { useQuery } from "@tanstack/react-query";
import {
  dummyMultiplePredictionData,
  dummyPredictionData,
} from "@/components/vote/dummyPredictionModal";

export const useVotePredictionQuery = ({
  queryKey,
  postId,
}: {
  queryKey: string;
  postId: number;
}) => {
  return useQuery({
    queryKey: [queryKey, postId],
    queryFn: () => {
      const response = dummyPredictionData;

      return response;
    },
  });
};
