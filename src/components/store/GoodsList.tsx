import { storeGoodsType, storeGoodsTypes } from "@/types";
import CardList from "@/components/common/cardList/CardList";
import Goods from "./Goods";

const GoodsList = ({ goodsList }: { goodsList: storeGoodsTypes }) => {
  return (
    <CardList>
      {goodsList &&
        goodsList.goods.map((item: storeGoodsType, index: number) => {
          return <Goods key={index} goods={item} />;
        })}
    </CardList>
  );
};

export default GoodsList;
