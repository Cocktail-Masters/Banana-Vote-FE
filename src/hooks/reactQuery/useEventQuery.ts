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
    end_page_index: response.end_page_index,
    next_page: pageIndex + 1,
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
      return lastPage.end_page_index <= lastPage.next_page
        ? undefined
        : lastPage.next_page;
    },
  });
};
