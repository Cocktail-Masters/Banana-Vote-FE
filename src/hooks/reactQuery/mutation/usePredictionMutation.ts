import api from "@/common/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const predictionModify = async ({
  prediction,
}: {
  prediction: {
    voteItemId: number;
    points: number;
  };
}) => {
  const response = await api.patch(`/votes/prediction`, {
    prediction,
  });
  console.log(response);

  return response;
};

export const usePredictionMutation = ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: predictionModify,
    onSuccess: (data) => {
      queryClient.invalidateQueries(queryKey);
      console.log(data);
    },
    onError: (error) => {},
  });
};
