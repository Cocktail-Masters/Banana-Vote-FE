/**
import { queryClient } from './../../../common/reactQuery/QueryClient';
 * @author mingyu
 */

import { storeCategoryListFetch } from "@/hooks/reactQuery/useStoreCategoryListQuery";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../getQueryClient";

export default async function HydratedStore({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["storeCategoryList"],
    queryFn: () => storeCategoryListFetch(),
  });

  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}
