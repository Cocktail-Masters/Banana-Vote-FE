import { useMutation, useQueryClient } from "@tanstack/react-query";
import { opinionType } from "@/types";
import api from "@/common/axiosInstance";

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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: commentInputPost,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["userInfo"]);
    },
    onError: (error) => {},
  });
};
