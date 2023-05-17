import { useInfiniteQuery } from "@tanstack/react-query";

export const eventFetch = async ({
  pageIndex,
  close,
}: {
  pageIndex: number;
  close: boolean;
}) => {
  const response = await fetch(
    `
    ${process.env.NEXT_PUBLIC_HOSTNAME}/api/events/${pageIndex}?` +
      new URLSearchParams({
        close: String(close),
      })
  ).then((response) => response.json());
  return {
    response: response.events,
    endPageIndex: response.end_page_index,
    nextPage: pageIndex + 1,
  };
};

export const useEventQuery = ({ close = false }: { close?: boolean }) => {
  return useInfiniteQuery({
    queryKey: ["eventList", close],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await eventFetch({ pageIndex: pageParam, close });
      return response;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.endPageIndex <= lastPage.nextPage
        ? undefined
        : lastPage.nextPage;
    },
  });
};
