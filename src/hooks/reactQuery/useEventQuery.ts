import { useInfiniteQuery } from "@tanstack/react-query";

export const eventFetch = async ({
  pageIndex,
  close = false,
}: {
  pageIndex: number;
  close?: boolean;
}) => {
  const response = await fetch(
    `
    ${process.env.NEXT_PUBLIC_HOSTNAME}/api/events/${pageIndex}?` +
      new URLSearchParams({
        close: String(close),
      })
  ).then((response) => response.json());
  console.log("response", response);
  return response;
};

export const useEventQuery = ({
  pageIndex,
  close = false,
}: {
  pageIndex: number;
  close?: boolean;
}) => {
  return useInfiniteQuery({
    queryKey: ["eventList", pageIndex],
    queryFn: async () => {
      const response = await eventFetch({ pageIndex });
      console.log(response);
      return {
        response: response.events,
        is_last: response.is_last,
        current_page: pageIndex,
      };
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.is_last ? lastPage.current_page + 1 : undefined;
    },
  });
};
