import { useMutation } from "react-query";
import { queryClient } from "@/common/reactQuery/QueryClient";
import { opinionType } from "@/types";
import { DummyComments } from "@/components/voteDetail/commentList/DummyComment";

export const useCommentMutation = ({
  queryKey,
}: {
  queryKey: string | (string | number[]);
}) => {
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
