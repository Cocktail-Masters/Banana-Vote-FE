/**
 * @author mingyu
 */
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../getQueryClient";
import { fetchPopularList } from "@/hooks/reactQuery/usePopularListQuery";
import { fetchInterestList } from "@/hooks/reactQuery/useInterestListQuery";
import { fetchRankingTop5 } from "@/hooks/reactQuery/useRankingTop5Query";
import { fetchTagTop10 } from "@/hooks/reactQuery/useTagTop10Query";

export default async function HydratedHome({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["popular"],
    queryFn: () => fetchPopularList(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["interest"],
    queryFn: () => fetchInterestList(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["rankingTop5"],
    queryFn: () => fetchRankingTop5(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["tagTop10"],
    queryFn: () => fetchTagTop10(),
  });

  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}
