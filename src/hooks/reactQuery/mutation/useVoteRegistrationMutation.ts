import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
export type voteRegistrationItemType = {
  itemNumber: number;
  title: string;
  imageUrl: string;
  iframeLink?: string;
};

export type voteRegistrationType = {
  title: string;
  content: string;
  is_public: boolean;
  is_anonymous?: boolean;
  is_event?: boolean;
  end_date: string;
  items: voteRegistrationItemType[];
  tags: string[];
};

type fetchCreateVoteType = {
  createVoteData: voteRegistrationType;
};

export const fetchCreateVoteTest = async ({
  createVoteData,
}: fetchCreateVoteType) => {
  const response = await fetch("/api/vote/create", {
    method: "POST",
    body: JSON.stringify(createVoteData),
  });
  const result = await response.json();
  return result;
};

export const fetchCreateVote = async ({
  createVoteData,
}: fetchCreateVoteType) => {
  const test = JSON.stringify(createVoteData);
  console.log(createVoteData);
  console.log(test);
  const { data } = await axios.post("/api/v1/votes", {
    method: "POST",
    body: test,
  });
  const result = await data.json();
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
    onSuccess: (data) => {
      queryClient.invalidateQueries(queryKey);
    },
    onError: (error) => {},
  });
};
