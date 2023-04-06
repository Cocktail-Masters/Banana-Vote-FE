import VoteDetailItem from "@/components/vote/detail/Item";
import { voteCheckFetch } from "@/hooks/reactQuery/useVoteCheckQuery";
import { voteDetailFetch } from "@/hooks/reactQuery/useVoteDetailQuery";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";

export default async function HydrateDetail({ postId }: { postId: number }) {
  console.log("포스트 아이디를 알려줘!", postId);
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["voteDetail", postId], async () => {
    const response = await voteDetailFetch(postId);
    return response.res;
  });
  await queryClient.prefetchQuery(["voteCheck", postId], async () => {
    const response = await voteCheckFetch(postId);
    return response.res;
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <VoteDetailItem postId={postId} />
    </Hydrate>
  );
}
