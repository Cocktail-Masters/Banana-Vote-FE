import PicketArea from "@/components/picket";
import CommentListArea from "@/components/commentList";
import { Locale } from "i18n-config";
import HydrateDetail from "./hydrateDetail";
import VoteDetailItem from "@/components/vote/detail/Item";

const VoteDetail = ({
  params,
}: {
  params: { detail: string; lng: Locale };
}) => {
  return (
    <div className={"VoteDetail"} style={{ width: "100%", height: "100%" }}>
      {/* <HydrateDetail postId={params.detail} /> */}
      <VoteDetailItem postId={parseInt(params.detail)} />
      <PicketArea />
      {/* <CommentListArea /> */}
    </div>
  );
};

export default VoteDetail;
