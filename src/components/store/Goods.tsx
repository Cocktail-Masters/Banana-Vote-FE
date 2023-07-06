/**
 * @author mingyu
 */
"use client";
import Image from "next/image";
import { storeGoodsType } from "@/types";
import banana from "@/assets/icons/banana_svgrepo.com.svg";
import Card from "../common/cardList/Card";
import CardBadge from "../common/cardList/CardBadge";
import CardBadgeList from "../common/cardList/CardBadgeList";

const Goods = ({ goods }: { goods: storeGoodsType }) => {
  return (
    <Card imageUrl={goods.imageUrl}>
      {/* 아이템 이름 */}
      <p className="w-5/6 truncate text-base font-semibold text-slate-900 text-text-feed dark:text-text-feed-dark text-center">
        {goods.name}
      </p>
      {/* 뱃지 리스트 */}
      <CardBadgeList>
        {/* Hot 뱃지 */}
        {goods.sellCount > 10 && (
          <CardBadge label={"Hot"} bgColor={"#FF7777"} textColor={"white"} />
        )}
        {/* New 뱃지 */}
        {new Date().getTime() - new Date(goods.startDate).getTime() <
          604800000 && (
          <CardBadge label={"New"} bgColor={"#85C1E9"} textColor={"white"} />
        )}
      </CardBadgeList>

      {/* 가격 */}
      <div className="absolute bottom-2 right-3 flex h-6 w-auto">
        <Image src={banana} alt="banana" width={24} height={24} />
        <p className="text-md font-semibold leading-6">
          {goods.price.toLocaleString()}
        </p>
      </div>
    </Card>
  );
};

export default Goods;
