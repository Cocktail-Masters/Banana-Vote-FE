import { rankingParamsType } from "@/app/[lng]/ranking/[seasonId]/[paginationIndex]/page";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
export type rankingRouteCallbackFunctionType = {
  newSeasonId?: string;
  newPageIndex?: number;
};

const useRankingRouter = (params: rankingParamsType) => {
  const router = useRouter();
  const routeCallbackHandler = useCallback(
    ({ newSeasonId, newPageIndex }: rankingRouteCallbackFunctionType) => {
      const newPath = `${process.env.NEXT_PUBLIC_HOSTNAME}/ranking/${
        newSeasonId ?? params.seasonId
      }/${newPageIndex ?? params.paginationIndex}`;
      router.push(newPath);
    },
    [params.paginationIndex, params.seasonId, router]
  );
  return { routeCallbackHandler };
};
export default useRankingRouter;
