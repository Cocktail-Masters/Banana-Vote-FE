/**
 * @author mingyu
 */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { storeGoodsType } from "@/types";
import banana from "@/assets/icons/banana_svgrepo.com.svg";
const Goods = ({ goods }: { goods: storeGoodsType }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseOver = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1.05)";
      imgRef.current.style.transitionDuration = "0.25s";
    }
  };

  const handleMouseOut = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1)";
      imgRef.current.style.transitionDuration = "0.25s";
    }
  };

  const handleClick = () => {
    alert(goods.name);
  };

  return (
    <div
      className="relative h-60 w-full rounded-2xl drop-shadow-lg "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {/* 아이템 이미지 영역 */}
      <div className="h-2/3 w-full overflow-hidden rounded-t-2xl border-b border-inherit bg-white">
        <Image
          src={
            !goods.image_url || goods.image_url.length < 1
              ? banana
              : goods.image_url
          }
          className="flex h-full w-full items-center justify-center"
          alt="default item image"
          width={800}
          height={600}
          ref={imgRef}
        />
      </div>
      {/* 아이템 설명 영역 */}
      <div className="relative flex h-1/3 w-full items-center justify-center rounded-b-2xl bg-white">
        {/* 아이템 이름 */}
        <p className="text-base font-semibold text-slate-900">{goods.name}</p>
        <div className="absolute top-2 left-3 flex">
          {/* Hot 뱃지 */}
          {goods.sell_count > 10 && (
            <div className="mr-2 flex rounded-md bg-[#FF7777] pl-2 pr-2">
              <p className="text-sm font-bold text-white">Hot</p>
            </div>
          )}
          {/* New 뱃지 */}
          {new Date().getTime() - new Date(goods.start_date).getTime() <
            604800000 && (
            <div className=" flex rounded-md bg-[#85C1E9] pl-2 pr-2">
              <p className="text-sm font-bold text-white">New</p>
            </div>
          )}
        </div>

        {/* 가격 */}
        <div className="absolute right-3 bottom-2 flex h-6 w-auto">
          <Image src={banana} alt="banana" width={24} height={24} />
          <p className="text-md font-semibold leading-6">
            {goods.price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goods;
