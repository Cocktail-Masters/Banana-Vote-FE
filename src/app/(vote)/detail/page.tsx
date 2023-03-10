import VoteDetailArea from "@/components/VoteDetail/DetailArea";
import PicketArea from "@/components/VoteDetail/PicketArea";
import CommentListArea from "@/components/VoteDetail/CommentList";

const VoteDetail = () => {
  return (
    <div className={"voteDetail"} style={{ width: "100%", height: "100%" }}>
      <VoteDetailArea />
      <PicketArea />
      <CommentListArea />
    </div>
  );
};

export default VoteDetail;
