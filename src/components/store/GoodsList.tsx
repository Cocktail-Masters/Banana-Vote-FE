"use client";
import { storeGoodsType, storeGoodsTypes } from "@/types";
import CardList from "@/components/common/cardList/CardList";
import Goods from "./Goods";

const GoodsList = ({
  goodsList,
  handleModal,
}: {
  goodsList: storeGoodsTypes;
  handleModal: (id: number) => void;
}) => {
  return (
    <CardList>
      {goodsList &&
        goodsList.goodsList.map((item: storeGoodsType, index: number) => {
          return (
            <div key={index} onClick={() => handleModal(item.id)}>
              <Goods goods={item} />
            </div>
          );
        })}
    </CardList>
  );
};

export default GoodsList;
