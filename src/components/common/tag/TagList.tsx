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
  const useSearch = useSearchVoteByKeyword();

  const handleTagClick = (e: MouseEvent<HTMLElement>) => {
    const params = {
      keyword: (e.target as HTMLElement).innerText,
      isClosed: false,
      sortBy: 1,
    };

    useSearch.routeSearchResultHandler(params);
  };

  return (
    <div className="mt-2 flex h-auto w-full select-none flex-wrap gap-2 px-2 py-0">
      {tags.map((tag: tagListType) => {
        return (
          <Tag key={tag.id} tagName={tag.name} handleClick={handleTagClick} />
        );
      })}
    </div>
  );
};

export default TagList;
