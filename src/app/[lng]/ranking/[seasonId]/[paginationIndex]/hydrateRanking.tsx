import { getRankingFromApi } from "@/app/api/ranking/route";
import RankingList from "@/components/ranking/RankingList.client";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../../getQueryClient";
import { rankingParamsType } from "./page";

export default async function HydratedRanking({
  children,
  params,
}: {
  children: React.ReactNode;
  params: rankingParamsType;
}) {
  const { seasonId } = params;
  const queryClient = getQueryClient();
  const defaultPage = 0;
  await queryClient.prefetchQuery(["ranking", seasonId, defaultPage], () => {
    const res = getRankingFromApi({ seasonId: seasonId });
    return res;
  });
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}
