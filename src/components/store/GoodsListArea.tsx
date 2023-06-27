"use client";
import React, { Suspense, useEffect, useState } from "react";
import GoodsList from "./GoodsList";
import { storeGoodsTypes } from "@/types";
import Loading from "../Loading";

type goodsListAreaProps = {
  currentCategory: number;
  orderBy: number;
  goodsList: storeGoodsTypes;
};

const GoodsListArea = ({
  goodsList,
}: goodsListAreaProps) => {
  return (
    <div className="mt-3 flex h-auto w-full items-center justify-center p-3">
      <Suspense fallback={<Loading />}>
        <GoodsList goodsList={goodsList} />
      </Suspense>
    </div>
  );
};

export default GoodsListArea;
