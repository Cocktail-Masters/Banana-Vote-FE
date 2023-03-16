"use client";

import VoteDetailItemCard from "@/components/Vote/DetailItemCard";
import PicketArea from "@/components/picket";
import CommentListArea from "@/components/commentList";

const VoteDetail = () => {
  return (
    <div className={"voteDetail"} style={{ width: "100%", height: "100%" }}>
      <VoteDetailItemCard />
      <PicketArea />
      <CommentListArea />
    </div>
  );
};

export default VoteDetail;
