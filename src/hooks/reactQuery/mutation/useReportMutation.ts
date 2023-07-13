import api from "@/common/axiosInstance";
import useTranslation from "@/hooks/useTranslation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

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
  const { translation } = useTranslation();
  return useMutation({
    mutationFn: ReportPost,
    onSuccess: (data) => {
      toast.success(translation("upload_success"));
    },
    onError: (error) => {
      toast.error(translation("upload_failed" + error));
    },
  });
};
