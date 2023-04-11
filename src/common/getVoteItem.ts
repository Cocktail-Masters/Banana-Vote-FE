import { createVoteItemType, voteItemType } from "@/types";
import { nanoid } from "nanoid";

export const getDefaultVoteItem = (): createVoteItemType => {
  return {
    id: nanoid(),
    imageFile: null,
    image_url: null,
    title: "",
    item_number: 1,
    iframe_link: "",
    total_points: 1,
    voted_number: 1,
  };
};

export const getVoteItemsFromResponse = (
  responseVoteItem: voteItemType
): createVoteItemType => {
  return {
    id: responseVoteItem.id,
    imageFile: null,
    image_url: responseVoteItem.image_url,
    title: responseVoteItem.title,
    item_number: responseVoteItem.item_number,
    iframe_link: responseVoteItem.iframe_link,
    total_points: responseVoteItem.total_points,
    voted_number: responseVoteItem.voted_number,
  };
};
