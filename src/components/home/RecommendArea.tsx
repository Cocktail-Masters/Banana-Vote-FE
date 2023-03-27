"use client";

/**
 * @author mingyu
 * @description 메인페이지에서 인기 투표, 관심 투표 표시하는 영역
 */
import { recDummyList } from "./dummys";
import RecommendBox from "./RecommendBox";
import Slider from "react-slick";
import { useState } from "react";
import "./styles/slick.css";
import "./styles/slick-theme.css";
import ArrowLeft from "@/assets/icons/arrow_left.png";
import Image from "next/image";

const SlickButtonFix = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any) => (
  <div className="relative h-10 w-10" {...props}>
    {children}
  </div>
);

const RecommendArea = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const TITLES = ["지금 인기있는 투표", "관심있을만한 최신 투표"];

  return (
    <div className="relative mx-auto mt-4 mb-4 h-[260px] w-[360px] select-none rounded-xl bg-white drop-shadow-md">
      <div className="h-16 w-full">
        <div className="relative flex w-full items-center justify-center text-center">
          <div className="h-7 w-auto" />
          {/* 박스 제목 */}
          <h5 className="absolute top-[66%] left-[50%] h-7 w-60 translate-x-[-50%] justify-center text-center text-xl font-bold text-blue-500">
            {TITLES[currentIndex]}
          </h5>
        </div>
      </div>
      <hr className="mx-auto h-[1.5px] w-11/12 border-0 bg-yellow-500" />
      <div className="h-52 w-full p-4">
        <Slider
          dots={true}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          prevArrow={
            // TODO : 콘솔 에러 해결하기
            // https://github.com/akiran/react-slick/issues/1195
            <SlickButtonFix>
              <Image
                className="absolute left-1 h-full w-full rounded-full pl-3 pr-3 hover:bg-slate-100"
                src={ArrowLeft}
                alt="ArrowLeft"
                width={25}
                height={25}
              />
            </SlickButtonFix>
          }
          nextArrow={
            <SlickButtonFix>
              <div className="absolute right-1 rounded-full pl-3 pr-3 text-xl font-bold hover:bg-slate-100">
                &gt;
              </div>
            </SlickButtonFix>
          }
          initialSlide={currentIndex}
          afterChange={(index: number) => {
            setCurrentIndex(index);
          }}
        >
          <RecommendBox contents={recDummyList[0]} />
          <RecommendBox contents={recDummyList[1]} />
        </Slider>
      </div>
    </div>
  );
};

export default RecommendArea;
