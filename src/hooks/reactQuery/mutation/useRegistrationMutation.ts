import { useMutation } from "@tanstack/react-query";
import getQueryClient from "@app/[lng]/getQueryClient";

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
  const queryClient = getQueryClient();
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
