import { getRankingFromApi } from "@/app/api/ranking/route";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";

export default async function HydratedRanking({
  children,
  seasonId,
}: {
  children: React.ReactNode;
  seasonId: string;
}) {
  const queryClient = getQueryClient();
  const defaultPage = 0;
  await queryClient.prefetchQuery(["ranking", seasonId, defaultPage], () =>
    getRankingFromApi({ season_id: seasonId })
  );
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}
