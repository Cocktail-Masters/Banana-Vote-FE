import { useMutation, useQueryClient } from "@tanstack/react-query";
import { opinionType, opinionTypes } from "@/types";
import api from "@/common/axiosInstance";

export const commentInputPost = async ({
  sendData,
}: {
  sendData: {
    voteId: number;
    content: string;
  };
}) => {
  const response = await api.post(`/opinions`, sendData);
  return response;
};

export const useCommentMutation = ({ voteId }: { voteId: number }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: commentInputPost,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["commentList", "recent", voteId]);
      queryClient.invalidateQueries(["commentList", "agree", voteId]);
    },
    onError: (error) => {},
  });
};

const commentThumbsPatch = async ({
  opinionId,
  isAgree,
}: {
  opinionId: number;
  isAgree: boolean;
}) => {
  const response = await api.patch(`/opinions/${opinionId}`, {
    isAgree,
  });
};

export const useCommentThumbsMutation = ({ voteId }: { voteId: number }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentThumbsPatch,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["commentList", "recent", voteId]);
      queryClient.invalidateQueries(["commentList", "agree", voteId]);
    },
    onError: (error) => {},
  });
};
