import { getSeasonFromApi } from "@/app/api/season/route";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../../getQueryClient";

export default async function HydratedSeason({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["season"], getSeasonFromApi);
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}
