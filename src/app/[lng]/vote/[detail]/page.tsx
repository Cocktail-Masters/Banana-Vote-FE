import VoteDetailItem from "@/components/vote/detail/Item";
import PicketArea from "@/components/picket";
import CommentListArea from "@/components/commentList";

export async function generateStaticParams() {
  return [{ detail: "1" }];
}

const VoteDetail = ({ params }: { params: { detail: string } }) => {
  console.log(params);
  return (
    <div className={"VoteDetail"} style={{ width: "100%", height: "100%" }}>
      <VoteDetailItem />
      <PicketArea />
      <CommentListArea />
    </div>
  );
};

export default VoteDetail;
