import { createVoteItemType, voteItemType } from "@/types";
import { nanoid } from "nanoid";

export const getDefaultVoteItem = (): createVoteItemType => {
  return {
    id: nanoid(),
    imageFile: null,
    imageUrl: null,
    title: "",
    itemNumber: 1,
    iframeLink: "",
    totalPoints: 1,
    votedNumber: 1,
  };
};

export const getVoteItemsFromResponse = (
  responseVoteItem: voteItemType
): createVoteItemType => {
  return {
    id: responseVoteItem.id,
    imageFile: null,
    imageUrl: responseVoteItem.imageUrl,
    title: responseVoteItem.title,
    itemNumber: responseVoteItem.itemNumber,
    iframeLink: responseVoteItem.iframeLink,
    totalPoints: responseVoteItem.totalPoints,
    votedNumber: responseVoteItem.votedNumber,
  };
};
