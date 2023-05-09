/**
 * @author mingyu
 */

import { feedListFetch } from "@/hooks/reactQuery/useFeedListQuery";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import React from "react";
import getQueryClient from "../getQueryClient";

const HydratedHashtag = async ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();

  /**
   * @TODO prefetch hashtag query by HASHTAG KEYWORD
   */
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["feedList", true, 1, "keyword"],
    queryFn: () => feedListFetch(true, 1, "keyword"),
  });

  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};

export default HydratedHashtag;
