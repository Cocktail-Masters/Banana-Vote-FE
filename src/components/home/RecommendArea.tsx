/**
 * @author mingyu
 * @description 메인페이지에서 인기 투표, 관심 투표 표시하는 영역
 */
"use client";
import RecommendBox from "@/components/home/RecommendBox";
import Slider from "react-slick";
import { useState } from "react";
import "@/components/home/styles/slick.css";
import "@/components/home/styles/slick-theme.css";
import { usePopularListQuery } from "@/hooks/reactQuery/usePopularListQuery";
import { useInterestListQuery } from "@/hooks/reactQuery/useInterestListQuery";
import Loading from "@/components/Loading";

const RecommendArea = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const TITLES = ["지금 인기있는 투표", "관심있을만한 최신 투표"];

  const popResponse = usePopularListQuery({
    queryKey: "popular",
  });
  const intResponse = useInterestListQuery({
    queryKey: "interest",
  });

  return (
    <div className="relative mx-auto mt-4 mb-4 h-[260px] w-[360px] select-none rounded-xl bg-bg-feed drop-shadow-md dark:bg-bg-feed-dark">
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
      <div className="h-52 w-full stroke-black p-4 text-text-article dark:stroke-white dark:text-text-article-dark">
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
              stroke="currentColor"
              strokeWidth={2}
              id="slick-prev-arrow"
              className="h-6 w-6 rounded-full stroke-black p-4 text-black hover:bg-slate-100 dark:stroke-white dark:stroke-white"
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
              id="slick-next-arrow"
              className="h-6 w-6 rounded-full p-4 hover:bg-slate-100"
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
          {popResponse.isLoading ? (
            <div className="mx-auto flex h-[154px] items-center justify-center">
              <Loading />
            </div>
          ) : (
            popResponse.data && <RecommendBox votes={popResponse.data.votes} />
          )}
          {intResponse.isLoading ? (
            <div className="mx-auto flex h-[154px] items-center justify-center">
              <Loading />
            </div>
          ) : (
            intResponse.data && <RecommendBox votes={intResponse.data.votes} />
          )}
        </Slider>
      </div>
    </div>
  );
};

export default RecommendArea;
