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

const RecommendArea = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const TITLES = ["지금 인기있는 투표", "관심있을만한 최신 투표"];

  return (
    <div className="relative w-[360px] h-[260px] mt-4 mb-4 mx-auto select-none bg-white drop-shadow-md rounded-xl">
      <div className="w-full h-16">
        <div className="flex relative justify-center items-center text-center w-full">
          <div className="h-7 w-auto" />
          {/* 박스 제목 */}
          <h5 className="absolute top-[66%] left-[50%] translate-x-[-50%] text-xl font-bold w-60 h-7 text-center text-blue-500 justify-center">
            {TITLES[currentIndex]}
          </h5>
        </div>
      </div>
      <hr className="w-11/12 bg-yellow-500 h-[1.5px] mx-auto border-0" />
      <div className="w-full h-52 p-4">
        <Slider
          dots={true}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          prevArrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 p-4 rounded-full hover:bg-slate-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          }
          nextArrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 p-4 rounded-full hover:bg-slate-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
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
