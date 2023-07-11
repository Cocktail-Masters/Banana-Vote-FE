import api from "@/common/axiosInstance";
import useTranslation from "@/hooks/useTranslation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

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

  return response;
};

export const usePredictionMutation = ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const queryClient = useQueryClient();
  const { translation } = useTranslation();
  return useMutation({
    mutationFn: predictionModify,
    onSuccess: (data) => {
      queryClient.invalidateQueries(queryKey);
      toast.success(translation("predict_success"));
    },
    onError: (error) => {
      toast.error(translation("predict_failed" + error));
    },
  });
};
