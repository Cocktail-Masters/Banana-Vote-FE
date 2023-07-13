import { useMutation, useQueryClient } from "@tanstack/react-query";
import { opinionType, opinionTypes } from "@/types";
import api from "@/common/axiosInstance";
import useTranslation from "@/hooks/useTranslation";
import { toast } from "react-toastify";

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
  const { translation } = useTranslation();
  return useMutation({
    mutationFn: commentInputPost,
    onSuccess: (data) => {
      toast.success(translation("upload_success"));
      queryClient.invalidateQueries(["commentList", "recent", voteId]);
      queryClient.invalidateQueries(["commentList", "agree", voteId]);
    },
    onError: (error) => {
      toast.error(translation("upload_failed" + error));
    },
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

  const { translation } = useTranslation();
  return useMutation({
    mutationFn: commentThumbsPatch,
    onSuccess: (data) => {
      toast.success(translation("upload_success"));
      queryClient.invalidateQueries(["commentList", "recent", voteId]);
      queryClient.invalidateQueries(["commentList", "agree", voteId]);
    },
    onError: (error) => {
      toast.error(translation("upload_failed" + error));
    },
  });
};
