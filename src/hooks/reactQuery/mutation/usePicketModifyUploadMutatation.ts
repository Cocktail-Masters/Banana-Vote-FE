import api from "@/common/axiosInstance";
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

  return useMutation({
    mutationFn: newPicket ? postPicketUpload : postPicketModifyUpload,
    onSuccess: (data) => {
      toast.success("Success message", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      queryClient.invalidateQueries(queryKey);
    },
    onError: (error) => {
      toast.error("저런! 알 수 없는 이유로 실패 했습니다.", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    },
  });
};
