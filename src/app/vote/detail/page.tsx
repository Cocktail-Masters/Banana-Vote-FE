"use client";
<<<<<<< HEAD

import VoteDetailItemCard from "@/components/Vote/DetailItemCard";
import PicketArea from "@/components/picket";
import CommentListArea from "@/components/commentList";
=======
import VoteDetailArea from "@/components/voteDetail/DetailArea";
import PicketArea from "@/components/voteDetail/picketArea";
import CommentListArea from "@/components/voteDetail/commentList";
>>>>>>> 1f258a5875d9ed112e4f9e84f46a7d7c2cc34cf2

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
