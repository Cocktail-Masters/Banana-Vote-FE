import getRanking from "@/common/fetch/getRanking";
import RankingList from "@/components/ranking/RankingList";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../getQueryClient";

export default async function HydratedRanking() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["ranking", 0], () => getRanking());
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <RankingList />
    </Hydrate>
  );
}
