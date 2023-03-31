import getRanking from "@/common/fetch/getRanking";
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
  await queryClient.prefetchQuery(["ranking", seasonId, 0], () =>
    getRanking(seasonId)
  );
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}
