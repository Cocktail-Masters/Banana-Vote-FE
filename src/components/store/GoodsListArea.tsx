"use client";
import React, { useEffect, useState } from "react";
import GoodsList from "./GoodsList";
import { storeGoodsTypes } from "@/types";
import Loading from "../Loading";

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
  const [sortedGoodsList, setSortedGoodsList] = useState<storeGoodsTypes>();

  useEffect(() => {
    /**
     * @description orderBy에 따라 goodsList.goods를 정렬하여 반환하는 함수
     * @returns
     */
    const sortByOrderBy = (): storeGoodsTypes => {
      const filteredList = goodsList.goods.filter(
        (item) => item.type === currentCategory
      );

      if (orderBy === 0) {
        // 최신 순
        return {
          goods: [...filteredList].sort(
            (a, b) =>
              new Date(a.start_date).getTime() -
              new Date(b.start_date).getTime()
          ),
        };
      } else if (orderBy === 1) {
        // 인기 높은 순
        return {
          goods: [...filteredList].sort((a, b) => a.sell_count - b.sell_count),
        };
      } else if (orderBy === 2) {
        // 가격 높은 순
        return {
          goods: [...filteredList].sort((a, b) => b.price - a.price),
        };
      }

      return goodsList;
    };

    setSortedGoodsList(sortByOrderBy());
  }, [goodsList, orderBy, currentCategory]);

  return (
    <div className="mt-3 flex h-auto w-full items-center justify-center p-3">
      {sortedGoodsList ? (
        <GoodsList goodsList={sortedGoodsList} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default GoodsListArea;
