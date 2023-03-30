"use client";
import { storeGoodsType, storeGoodsTypes } from "@/types";
import React from "react";
import Goods from "./Goods";

const GoodsList = ({ goodsList }: { goodsList: storeGoodsTypes }) => {
  // TODO : storegoodslist 더미 데이터 불러오기
  return (
    <div className="h-100 grid w-full select-none grid-cols-1 items-center justify-center gap-6  md:grid-cols-2 lg:grid-cols-3">
      {goodsList &&
        goodsList.goods.map((item: storeGoodsType, index: number) => {
          return <Goods key={index} goods={item} />;
        })}
    </div>
  );
};

export default GoodsList;
