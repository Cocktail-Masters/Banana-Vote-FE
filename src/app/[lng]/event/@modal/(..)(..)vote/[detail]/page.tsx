import PicketArea from "@/components/picket";
import CommentListArea from "@/components/commentList";
import { Locale } from "i18n-config";
import VoteDetailItem from "@/components/vote/detail/Item";
import Modal from "@/components/common/modal/index";

const VoteDetailModal = ({
  params,
}: {
  params: { detail: string; lng: Locale };
  }) => {
  
  return (
    <Modal>
      <div
        className={"VoteDetailModal"}
        style={{ width: "100%", height: "100%" }}
      >
        <VoteDetailItem postId={parseInt(params.detail)} />
        <PicketArea />
        <CommentListArea />
      </div>
    </Modal>
  );
};

export default VoteDetailModal;
