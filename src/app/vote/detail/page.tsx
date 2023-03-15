import VoteDetailArea from "@/components/voteDetail/DetailArea";
import PicketArea from "@/components/voteDetail/picketArea";
import CommentListArea from "@/components/voteDetail/commentList";

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
