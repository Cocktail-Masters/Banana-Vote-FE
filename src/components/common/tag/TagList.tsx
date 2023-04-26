/**
 * @author mingyu
 */
"use client";
import Tag from "@/components/common/tag/Tag";
import useSearchVoteByKeyword from "@/hooks/useSearchVoteByKeyword";
import { tagListType, tagListTypes } from "@/types";
import { MouseEvent } from "react";

type tagListProps = {
  tags: tagListType[];
  handleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const TagList = ({ tags, handleClick }: tagListProps) => {
  /**
   * @description 태그 클릭 시 디폴트 이벤트
   */
  const handleTagClick = (e: MouseEvent<HTMLElement>) => {
    const keyword = (e.target as HTMLElement).innerText;
    console.log(keyword);

    /**
     * @todo route to search result page with (keyword)
     */
  };

  return (
    <div className="flex h-auto w-full select-none flex-wrap gap-2 px-2 py-0">
      {tags &&
        tags.map((tag: tagListType, index: number) => {
          return (
            <Tag
              key={tag.id}
              tagName={tag.name}
              handleClick={handleClick ? handleClick : handleTagClick}
            />
          );
        })}
    </div>
  );
};

export default TagList;
