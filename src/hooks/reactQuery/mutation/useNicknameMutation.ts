import { useMutation, useQueryClient } from "@tanstack/react-query";
import { opinionType } from "@/types";
import api from "@/common/axiosInstance";
import useTranslation from "@/hooks/useTranslation";
import { toast } from "react-toastify";

export const commentInputPost = async ({ nickname }: { nickname: string }) => {
  const response = await api.patch(
    `/users/nickname`,
    { nickname },
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const useNicknameMutation = () => {
  const { translation } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: commentInputPost,
    onSuccess: (data) => {
      toast.success(translation("modify_success"));
      queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (error) => {
      toast.error(translation("modify_failed" + error));
    },
  });
};
