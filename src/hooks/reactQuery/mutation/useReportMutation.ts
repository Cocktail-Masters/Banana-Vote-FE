import api from "@/common/axiosInstance";
import { useMutation } from "@tanstack/react-query";

const ReportPost = async ({
  report,
}: {
  report: {
    reportedContentType: string;
    reportedContentId: number;
    reportedReasonType: string;
    reportDetail: string;
  };
}) => {
  const response = await api.post(`/report`, report);

  return response.data;
};

export const usePredictionMutation = () => {
  return useMutation({
    mutationFn: ReportPost,
    onSuccess: (data) => {},
    onError: (error) => {},
  });
};
