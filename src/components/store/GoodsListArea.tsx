import React from "react";
import ItemList from "./GoodsList";
import { storeGoodsTypes } from "@/types";

type goodsListAreaProps = {
  currentCategory: number;
  orderBy: number;
  goodsList: storeGoodsTypes;
};

const GoodsListArea = ({
  currentCategory,
  orderBy,
  goodsList,
}: goodsListAreaProps) => {
  return (
    <div className="mt-3 flex h-auto w-full items-center justify-center bg-indigo-100/50 p-3">
      <ItemList goodsList={goodsList} />
    </div>
  );
};

export default GoodsListArea;
