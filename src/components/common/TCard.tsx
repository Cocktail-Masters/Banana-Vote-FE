import React from "react";

type TCardProps = {
  width: string;
  height: string;
  margin: string;
  children: React.ReactNode;
  onClick?: () => void;
  hoverEffect?: boolean;
};

const TCard = ({
  width,
  height,
  margin,
  children,
  onClick,
  hoverEffect,
}: TCardProps) => {
  const hov = hoverEffect
    ? "hover:bg-gray-700 bg-opacity-50 transition duration-500 ease-in-out"
    : "";
  return (
    <div
      className={`${width} ${height} ${margin} rounded-2xl border-black ${hov}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TCard;
