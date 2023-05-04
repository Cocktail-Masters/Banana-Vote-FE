import api from "@/common/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type picketModyfyResultType = {
  lastModified: string;
  current_price: number;
};

const postPicketModifyUpload = async ({
  picketImageUrl,
  paidPrice,
  voteId,
  position,
}: {
  picketImageUrl: string;
  paidPrice: number;
  voteId: number;
  position: number;
}) => {
  const response = await api.patch(`/pickets/${voteId}`,{
    position,
    currentPrice: 0,
    picketImageUrl,
    paidPrice,
  });
  console.log(response);
  return response;
};

export const usePicketModifyUploadMutation = ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postPicketModifyUpload,
    onSuccess: (data) => {
      queryClient.invalidateQueries(queryKey);
    },
    onError: (error) => {},
  });
};
