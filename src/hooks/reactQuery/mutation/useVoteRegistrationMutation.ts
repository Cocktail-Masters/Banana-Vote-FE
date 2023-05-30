import api from "@/common/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { camelizeKeys } from "humps";
export type voteRegistrationItemType = {
  itemNumber: number;
  title: string;
  imageUrl: string;
  iframeLink?: string;
};

export type voteRegistrationType = {
  title: string;
  content: string;
  isPublic: boolean;
  isAnonymous?: boolean;
  isEvent?: boolean;
  endDate: string;
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
  const { data } = await api.post("/api/v1/votes", {
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
