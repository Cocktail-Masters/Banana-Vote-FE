import { useMutation, useQueryClient } from "@tanstack/react-query";

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

type fetchCreateVoteType = {
  createVoteData: voteRegistrationType;
};

export const fetchCreateVote = async ({
  createVoteData,
}: fetchCreateVoteType) => {
  const response = await fetch("/api/vote/create", {
    method: "POST",
    body: JSON.stringify(createVoteData),
  });
  const result = await response.json();
  return result;
};

export const useRegistrationMutation = ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchCreateVote,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
    onError: () => {},
  });
};
