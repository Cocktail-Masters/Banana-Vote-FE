"use client";
import { eventTypes } from "@/types";
import { useState } from "react";
import Card from "../common/cardList/Card";
import CardBadge from "../common/cardList/CardBadge";
import CardBadgeList from "../common/cardList/CardBadgeList";
import ContentModal from "./ContentModal";

const EventContent = ({ content }: { content: eventTypes }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };
  return (
    <Card image_url={content.image} handleClick={onClick}>
      {isOpen && (
        <ContentModal
          isOpen={isOpen}
          onClose={onClick}
          voteId={content.vote_id}
        ></ContentModal>
      )}
      <p className="text-base font-semibold text-slate-900">{content.title}</p>
      <CardBadgeList>
        <CardBadge label={"test"} bgColor={"#FF7777"} textColor={"white"} />
      </CardBadgeList>
      <div className="absolute right-3 bottom-0 flex h-6 w-auto text-xs">
        {content.end_date}
      </div>
    </Card>
  );
};

export default EventContent;
