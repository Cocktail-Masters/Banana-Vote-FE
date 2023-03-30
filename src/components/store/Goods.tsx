/**
 * @author mingyu
 */
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { storeGoodsType } from "@/types";

// TODO : 라벨 표시 형식 정렬, 디폴트 이미지 설정, 이미지 url 넣기
const Goods = ({ goods }: { goods: storeGoodsType }) => {
  return (
    <div className="bg-green/50 h-60 w-full rounded-2xl drop-shadow-lg ">
      {/* 아이템 이미지 */}
      <div className="h-2/3 w-full overflow-hidden rounded-t-2xl">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
        >
          <Image
            src={
              "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDlfMTc5%2FMDAxNjQ2ODA1ODEzMDcz.7IoWiLROG_2J6xn970e3m8ycDxdnxerNtrYF1MVLhMMg.P80zQO77Jf34bsM5oHOoOAQd-FvvONcjpJqMdUYIMeAg.JPEG.yeunhap_steel%2F1646805523088.jpg&type=sc960_832"
            }
            alt="item image"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>
      {/* 아이템 설명 */}
      <div className="flex h-1/3 w-full items-center justify-center rounded-b-2xl bg-white">
        {goods.name}
      </div>
    </div>
  );
};

export default Goods;
