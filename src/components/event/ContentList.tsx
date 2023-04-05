import { eventTypes } from "@/types";
import Card from "../common/cardList/Card";
import CardBadge from "../common/cardList/CardBadge";
import CardBadgeList from "../common/cardList/CardBadgeList";

import CardList from "../common/cardList/CardList";
import EventContent from "./Content";

const ContentList = ({ contentList }: { contentList: eventTypes[] }) => {
  return (
    <CardList>
      {contentList.map((e, i) => (
        <EventContent key={i} content={e} />
      ))}
    </CardList>
  );
};
export default ContentList;
