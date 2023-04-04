import { eventTypes } from "@/types";
import Card from "../common/cardList/Card";
import CardList from "../common/cardList/CardList";

const ContentList = ({ contentList }: { contentList: eventTypes[] }) => {
  return (
    <CardList>
      {contentList.map((e, i) => (
        <Card image_url={e.image} key={i}>
          {e.title}
        </Card>
      ))}
    </CardList>
  );
};
export default ContentList;
