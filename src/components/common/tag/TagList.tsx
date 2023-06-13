/**
 * @author mingyu
 */
"use client";
import Tag from "@/components/common/tag/Tag";
import { tagListType, tagListTypes } from "@/types";
import { MouseEvent } from "react";
import Link from "next/link";

type tagListProps = {
  tags: string[];
  handleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const TagList = ({ tags, handleClick }: tagListProps) => {
  return (
    <div className="flex h-auto w-full select-none flex-wrap gap-2 px-2 py-0">
      {tags &&
        tags.map((tag: string, index: number) => {
          return (
            <Link key={index} href={`/hashtag/${tag}`}>
              <Tag tag={tag} />
            </Link>
          );
        })}
    </div>
  );
};

export default TagList;
