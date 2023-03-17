import { useMutation } from "react-query";
import { queryClient } from "@/common/reactQuery/QueryClient";
import { opinionType } from "@/types";
import { voteItemType } from "@components/vote/CreateVote";

export type voteRegistrationItemType = {
  title: string;
  imageUrl: string;
};

export type voteRegistrationType = {
  title: string;
  content: string;
  is_disclosure: boolean;
  is_anonymouse: boolean;
  end_date: string;
  vote_items: voteRegistrationItemType[];
  tags: string[];
};

export const useRegistrationMutation = ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  return useMutation(
    async ({
      uri,
      sendData,
    }: {
      uri: string;
      sendData: voteRegistrationType;
    }) => {
      // return DummyComments.opinions.push(sendData);
      return;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(queryKey);
      },
      onError: (error) => {},
    }
  );
};
