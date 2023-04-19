/**
 * @author mingyu
 */

import { tagListTypes } from "@/types";
import TagList from "../common/tag/TagList";

const TagBox = ({ tagList }: { tagList: tagListTypes }) => {
  return (
    <div>
      <div className="h-16 w-full">
        <div className="relative flex w-full items-center justify-between">
          <div className="h-7 w-auto" />
          {/* 박스 제목 */}
          <h5 className="absolute top-[66%] left-[50%] h-7 w-60 translate-x-[-50%] text-center text-xl font-bold text-blue-500">
            트렌딩 태그
          </h5>
        </div>
      </div>
      <hr className="mx-auto h-[1.5px] w-11/12 border-0 bg-yellow-500" />
      <div className="h-auto w-full p-4 text-text-article dark:text-text-article-dark">
        <TagList tags={tagList.tags} />
      </div>
    </div>
  );
};

export default TagBox;
