import VoteDetailItem from "@/components/vote/detail/Item";
import { voteDetailFetch } from "@/hooks/reactQuery/useVoteDetailQuery";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";

export default async function HydrateDetail({ postId }: { postId: number }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["voteDetail", postId], async () => {
    const response = await voteDetailFetch(postId);
    return response.res;
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <VoteDetailItem />
    </Hydrate>
  );
}
