import { useMutation, useQueryClient } from "@tanstack/react-query";
import { opinionType } from "@/types";

export const commentInputPost = async ({
  sendData,
}: {
  sendData: opinionType;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/vote/opinion`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    }
  );
  return response;
};

export const useCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: commentInputPost,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["commentList", "recent", 1]);
      queryClient.invalidateQueries(["commentList", "agree", 1]);
    },
    onError: (error) => {},
  });
};
