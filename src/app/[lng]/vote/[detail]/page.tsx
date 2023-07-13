import PicketArea from "@/components/picket";
import CommentListArea from "@/components/commentList";
import { Locale } from "i18n-config";
import VoteDetailItem from "@/components/vote/detail/Item";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const VoteDetail = ({
  params,
}: {
  params: { detail: string; lng: Locale };
}) => {
  return (
    <div
      className={
        "VoteDetail mt-10 mb-10 h-full w-full rounded-2xl border shadow-md dark:border-none "
      }
    >
      {/* <HydrateDetail postId={params.detail} /> */}
      <Suspense fallback={<Loading />}>
        <VoteDetailItem postId={parseInt(params.detail)} />
        <PicketArea />
        <CommentListArea />
      </Suspense>
    </div>
  );
};

export default VoteDetail;
