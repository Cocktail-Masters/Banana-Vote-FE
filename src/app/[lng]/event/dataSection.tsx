"use client";
import CardList from "@/components/common/cardList/CardList";
import ContentList from "@/components/event/ContentList";
import { useEventQuery } from "@/hooks/reactQuery/useEventQuery";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const EventDataSection = () => {
  const [isEnd, setIsEnd] = useState<boolean>(true);
  const isIng = () => {
    setIsEnd(true);
  };
  const isNotIng = () => {
    setIsEnd(false);
  };
  const { data, isFetching, hasNextPage, fetchNextPage } = useEventQuery({
    pageIndex: 1,
    close: isEnd,
  });
  const { ref, inView } = useInView({ threshold: 0.05 });
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);
  console.log("data", data);
  return (
    <div className="h-full w-full">
      <div className="mt-3 flex w-full justify-end">
        <button
          className={`mr-2 h-10 w-24 rounded-2xl font-semibold shadow-md hover:bg-secondary-orange active:bg-primary-yellow ${
            isEnd ? `bg-secondary-orange` : `none`
          }`}
          onClick={isIng}
        >
          진행중
        </button>
        <button
          className={`mr-4 h-10 w-24 rounded-2xl font-semibold shadow-md hover:bg-secondary-orange active:bg-primary-yellow ${
            !isEnd ? `bg-secondary-orange` : `none`
          }`}
          onClick={isNotIng}
        >
          종료
        </button>
      </div>
      <div className="flex h-full w-full" ref={ref}>
        {data !== undefined && data.pages && (
          <div>
            {data.pages.map((e, i) => (
              <div key={i}>
                <ContentList contentList={e.response} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDataSection;
