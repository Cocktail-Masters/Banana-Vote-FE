/**
 * @author mingyu
 * @description 피드의 제목 부분
 */

import React from "react";

const FeedTitle = ({ content }: { content: string }) => {
  return (
    <h2 className="text-xl font-bold mb-1 truncate hover:bg-gray-100 pt-4 pb-4 pl-2 pr-2 rounded-xl transition duration-100">
      {content}
    </h2>
  );
};

export default FeedTitle;
