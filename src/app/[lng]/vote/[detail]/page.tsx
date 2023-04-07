import PicketArea from "@/components/picket";
import CommentListArea from "@/components/commentList";
import { Locale } from "i18n-config";
import HydrateDetail from "./hydrateDetail";

const VoteDetail = ({
  params,
}: {
  params: { detail: string; lng: Locale };
}) => {
  console.log("params", params);
  return (
    <div className={"VoteDetail"} style={{ width: "100%", height: "100%" }}>
      {/* @ts-expect-error Server Component */}
      <HydrateDetail postId={params.detail} />
      <PicketArea />
      <CommentListArea />
    </div>
  );
};

export default VoteDetail;
