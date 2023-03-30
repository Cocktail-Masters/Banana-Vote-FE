import { useMutation } from "@tanstack/react-query";
import getQueryClient from "@app/[lng]/getQueryClient";
import { opinionType } from "@/types";
import { DummyComments } from "@/components/commentList/DummyComment";

export const useCommentMutation = ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const queryClient = getQueryClient();
  return useMutation(
    async ({ uri, sendData }: { uri: string; sendData: opinionType }) => {
      return DummyComments.opinions.push(sendData);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(queryKey);
      },
      onError: (error) => {},
    }
  );
};
