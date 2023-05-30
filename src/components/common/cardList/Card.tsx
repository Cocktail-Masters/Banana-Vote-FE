/**
 * @author mingyu
 * @description 리스트 형태로 뿌려지는 카드의 UI 틀
 * @param image_url 카드에 보여질 이미지 링크. 없으면 기본 이미지로 대체
 * @param handleClick 클릭 시 이벤트
 */
"use client";
import React, { useRef } from "react";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";

type cardProps = {
  imageUrl?: string;
  handleClick?: () => void;
  children: React.ReactNode;
};

const Card = ({ imageUrl, handleClick, children }: cardProps) => {
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

  return (
    <div
      className="relative h-60 w-full rounded-2xl drop-shadow-lg"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {/* 아이템 이미지 영역 */}
      <CardImage imageUrl={imageUrl} imgRef={imgRef} />
      {/* 아이템 설명 영역 */}
      <CardDescription>{children}</CardDescription>
    </div>
  );
};

export default Card;
