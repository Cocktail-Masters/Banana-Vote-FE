/**
 * @author mingyu
 */
import React from "react";

type tagProps = {
  tagId?: number;
  tagName: string;
  handleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Tag = ({ tagId, tagName, handleClick }: tagProps) => {
  return (
    <div
      className={`flex whitespace-nowrap rounded-3xl bg-primary-yellow/75 pl-2 pr-2 pt-1 pb-1 text-sm font-semibold text-black hover:invert-[.10] ${
        handleClick && "cursor-pointer"
      }`}
      onClick={handleClick}
    >
      #{tagName}
    </div>
  );
};

export default Tag;
