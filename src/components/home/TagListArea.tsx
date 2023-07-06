/**
 * @author mingyu
 */
"use client";
import Loading from "@/components/Loading";
import TagBox from "@/components/home/TagBox";
import { useTagTop10Query } from "@/hooks/reactQuery/useTagTop10Query";

const TagListArea = () => {
  const { isLoading, error, data } = useTagTop10Query({
    queryKey: "tagTop10",
  });

  return (
    <div className="mx-auto mb-4 mt-4 h-auto w-[360px] select-none rounded-xl bg-bg-feed drop-shadow-md dark:bg-bg-feed-dark">
      {isLoading || !data ? (
        <div className="mx-auto mt-10 flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <TagBox tagList={data} />
      )}
    </div>
  );
};

export default TagListArea;
