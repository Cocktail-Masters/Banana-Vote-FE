import React from "react";

type TCardProps = {
  width: string;
  height: string;
  margin?: string;
  children: React.ReactNode;
  onClick?: () => void;
  hoverEffect?: boolean;
  mobileWidth?: string;
};

const TCard = ({
  width,
  height,
  margin,
  children,
  onClick,
  hoverEffect,
  mobileWidth,
}: TCardProps) => {
  const hover = hoverEffect
    ? "hover:bg-gray-700 bg-opacity-50 transition duration-500 ease-in-out"
    : "";
  return (
    <div
      className={`${width} ${mobileWidth} ${height} ${margin} rounded-2xl border-black ${hover} `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TCard;
