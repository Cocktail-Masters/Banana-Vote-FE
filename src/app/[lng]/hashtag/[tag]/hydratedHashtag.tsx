/**
 * @author mingyu
 */

import { feedListFetch } from "@/hooks/reactQuery/useFeedListQuery";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import React from "react";
import getQueryClient from "../../getQueryClient";

export default async function HydratedHashtag({
  keyword,
  children,
}: {
  keyword: string;
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}
