import api from "@/common/axiosInstance";
import useTranslation from "@/hooks/useTranslation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export type picketModyfyResultType = {
  lastModified: string;
  currentPrice: number;
};

const postPicketModifyUpload = async ({
  picketImageUrl,
  paidPrice,
  voteId,
  position,
  curPrice = 0,
}: {
  picketImageUrl: string;
  paidPrice: number;
  voteId: number;
  position: number;
  curPrice?: number;
}) => {
  const response = await api.patch(`/pickets/${voteId}`, {
    position,
    curPrice: curPrice,
    picketImageUrl,
    paidPrice,
  });
  console.log(response);
  return response;
};

const postPicketUpload = async ({
  picketImageUrl,
  paidPrice,
  voteId,
  position,
  curPrice = 0,
}: {
  picketImageUrl: string;
  paidPrice: number;
  voteId: number;
  position: number;
  curPrice?: number;
}) => {
  const response = await api.post(`/pickets/${voteId}`, {
    position,
    curPrice,
    picketImageUrl,
    paidPrice,
  });
  console.log(response);
  return response;
};

export const usePicketUploadMutation = ({
  queryKey,
  newPicket,
}: {
  queryKey: (string | number)[];
  newPicket: boolean;
}) => {
  const queryClient = useQueryClient();
  const { translation } = useTranslation();
  return useMutation({
    mutationFn: newPicket ? postPicketUpload : postPicketModifyUpload,
    onSuccess: (data) => {
      toast.success(translation("upload_success"));
      queryClient.invalidateQueries(queryKey);
    },
    onError: (error) => {
      toast.error(translation("upload_failed" + error));
    },
  });
};
