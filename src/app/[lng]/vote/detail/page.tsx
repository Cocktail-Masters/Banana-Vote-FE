"use client";

import VoteDetailItem from "@/components/vote/detail/Item";
import PicketArea from "@/components/picket";
import CommentListArea from "@/components/commentList";

const VoteDetail = () => {
  return (
    <div className={"voteDetail"} style={{ width: "100%", height: "100%" }}>
      <VoteDetailItem />
      <PicketArea />
      <CommentListArea />
    </div>
  );
};

export default VoteDetail;
