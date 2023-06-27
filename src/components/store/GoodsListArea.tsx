"use client";
import React, { Suspense, useEffect, useState } from "react";
import GoodsList from "./GoodsList";
import { storeGoodsTypes } from "@/types";
import Loading from "../Loading";

type goodsListAreaProps = {
  handleModal: (id: number) => void;
  goodsList: storeGoodsTypes;
};

const GoodsListArea = ({ handleModal, goodsList }: goodsListAreaProps) => {
  return (
    <div className="mt-3 flex h-auto w-full items-center justify-center p-3">
      <Suspense fallback={<Loading />}>
        <GoodsList handleModal={handleModal} goodsList={goodsList} />
      </Suspense>
    </div>
  );
};

export default GoodsListArea;
