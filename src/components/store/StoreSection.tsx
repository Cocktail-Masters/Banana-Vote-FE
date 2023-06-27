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
import StoreModal from "./StoreModal";

const StoreSection = () => {
  const { translation } = useTranslation();

  const [currentCategory, setCurrentCategory] = useState<number>(0); // 현재 카테고리
  const [orderBy, setOrderBy] = useState<number>(1); // 1 : 최신 순, 2 : 인기 순, 3 : 가격 순
  const [modalToggle, setModalToggle] = useState<boolean>(false); // 모달 on off

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

  /** Set Modal */
  const handleModal = (id: number) => {
    alert(id);
  };

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
          handleModal={handleModal}
          goodsList={goodsAPI.data}
        />
      )}
      {/* 모달 영역 */}
      {modalToggle && (
        <StoreModal setModalToggle={setModalToggle} imageLink={""} />
      )}
    </>
  );
};

export default StoreSection;
