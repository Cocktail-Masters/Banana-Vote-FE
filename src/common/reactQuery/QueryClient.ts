import { QueryCache, QueryClient } from "@tanstack/react-query";
const queryErrorHandler = (error: unknown): void => {
  const id = "react-query-error";
  const title =
    error instanceof Error ? error.message : "서버 연결에 문제가 발생했습니다.";
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
