import { eventTypes } from "@/types";
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
