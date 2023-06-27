/**
 * @author mingyu
 */
"use client";
import React, { useState } from "react";
import CategoryArea from "@/components/store/CategoryArea";
import FilterArea from "@/components/store/FilterArea";
import GoodsListArea from "@/components/store/GoodsListArea";
import { STORE_FILTER_ELEMENT_LIST } from "@/constants/store";
import { useStoreGoodsQuery } from "./../../hooks/reactQuery/useStoreGoodsQuery";
import Loading from "@/components/Loading";
import PageTitle from "@/components/common/PageTitle";
import useTranslation from "@/hooks/useTranslation";
import { useStoreCategoryListQuery } from "@/hooks/reactQuery/useStoreCategoryListQuery";

const StoreSection = () => {
  const { translation } = useTranslation();

  const [currentCategory, setCurrentCategory] = useState<number>(0); // 현재 카테고리
  const [orderBy, setOrderBy] = useState<number>(1); // 1 : 최신 순, 2 : 인기 순, 3 : 가격 순

  /** Get Category */
  const categoryAPI = useStoreCategoryListQuery({
    queryKey: "storeCategoryList",
  });

  /** Get Goods with Filtering Options */
  const goodsAPI = useStoreGoodsQuery(
    "storeGoods",
    categoryAPI.data[currentCategory],
    orderBy
  );

  return (
    <>
      {/* 타이틀 영역 */}
      <PageTitle title={translation("store.page.title")} />
      {/* 카테고리 영역 */}
      <CategoryArea
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={categoryAPI.data}
      />
      {/* 필터 영역 */}
      <FilterArea
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        filterElementList={STORE_FILTER_ELEMENT_LIST}
      />
      {/* 아이템 영역 */}
      {goodsAPI.isLoading && <Loading />}
      {goodsAPI.data && (
        <GoodsListArea
          currentCategory={currentCategory}
          orderBy={orderBy}
          goodsList={goodsAPI.data}
        />
      )}
      {/* 모달 영역 */}
    </>
  );
};

export default StoreSection;
