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
      {!goodsList || goodsList.goodsList.length === 0 ? (
        <div className="flex items-center justify-center p-3 text-center">
          No List
        </div>
      ) : (
        goodsList.goodsList.map((item: storeGoodsType, index: number) => {
          return (
            <div key={item.id} onClick={() => handleModal(index)}>
              <Goods goods={item} />
            </div>
          );
        })
      )}
    </CardList>
  );
};

export default GoodsList;
