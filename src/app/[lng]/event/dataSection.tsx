"use client";
import CardList from "@/components/common/cardList/CardList";
import ContentList from "@/components/event/ContentList";
import Loading from "@/components/Loading";
import { useEventQuery } from "@/hooks/reactQuery/useEventQuery";
import useTranslation from "@/hooks/useTranslation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const EventDataSection = () => {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const isIng = () => {
    setIsEnd(false);
  };
  const isNotIng = () => {
    setIsEnd(true);
  };
  const { translation } = useTranslation();

  const { data, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useEventQuery({
      close: isEnd,
    });
  const { ref, inView } = useInView({ threshold: 0.05 });
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);
  return (
    <div className="h-full w-full">
      <div className="mt-3 flex w-full justify-end">
        <button
          className={`mr-4 h-10 w-24 rounded-2xl font-semibold shadow-md hover:bg-secondary-orange active:bg-primary-yellow ${
            !isEnd ? `bg-secondary-orange` : `none`
          }`}
          onClick={isIng}
        >
          {translation("event.ing")}
        </button>
        <button
          className={`mr-2 h-10 w-24 rounded-2xl font-semibold shadow-md hover:bg-secondary-orange active:bg-primary-yellow ${
            isEnd ? `bg-secondary-orange` : `none`
          }`}
          onClick={isNotIng}
        >
          {translation("event.end")}
        </button>
      </div>
      <div className="mt-3 flex h-auto w-full items-center justify-center p-3">
        {!isLoading && data !== undefined && data.pages ? (
          <div className="w-full">
            {data.pages.map((e, i) => (
              <div key={i} className="mb-6 w-full">
                <ContentList contentList={e.response} />
              </div>
            ))}
            <div ref={ref}></div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default EventDataSection;
