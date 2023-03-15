import { useMutation } from "react-query";
import { queryClient } from "@/common/reactQuery/QueryClient";
import { opinionType } from "@/types";
import { voteItemType } from "@/components/Vote/CreateVote";

export type voteRegistrationItemType = {
  title: string;
  image: string;
};

export type voteRegistrationType = {
  title: string;
  content: string;
  is_disclosure: boolean;
  is_anonymouse: boolean;
  end_date: string;
  vote_items: voteRegistrationItemType[] | voteItemType[];
  tags: string[];
};

export const useRegistrationMutation = ({
  queryKey,
  data,
}: {
  queryKey: string | (string | number)[];
  data: any;
}) => {
  return useMutation(
    async ({ uri, sendData }: { uri: string; sendData: opinionType }) => {
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
