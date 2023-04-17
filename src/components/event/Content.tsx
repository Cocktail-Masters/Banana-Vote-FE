"use client";
import useTranslation from "@/hooks/useTranslation";
import { eventTypes } from "@/types";
import Link from "next/link";
import Card from "../common/cardList/Card";
import CardBadge from "../common/cardList/CardBadge";
import CardBadgeList from "../common/cardList/CardBadgeList";
import { useParams } from "next/navigation";

const EventContent = ({ content }: { content: eventTypes }) => {
  const { translation } = useTranslation();
  const params = useParams();
  // console.log(params);
  return (
    <Link href={`/vote/${content.vote_id}`}>
      <Card image_url={content.image}>
        <p className="text-base font-semibold text-slate-900">
          {content.title}
        </p>
        <CardBadgeList>
          <CardBadge
            label={
              content.is_closed
                ? translation("event.end")
                : translation("event.ing")
            }
            bgColor={"#FF7777"}
            textColor={"white"}
          />
        </CardBadgeList>
        <div className="absolute right-3 bottom-0 flex h-6 w-auto text-xs">
          {content.end_date}
        </div>
      </Card>
    </Link>
  );
};

export default EventContent;
