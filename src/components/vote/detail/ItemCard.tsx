import Image from "next/image";
import defaultImg from "@assets/images/defalut_vote_element_img.png";
import { voteItemType } from "@/types";

const VoteDetailItemCard = ({
  item,
  setSelectItem,
  selectItem,
  isParti,
}: {
  item: voteItemType;
  setSelectItem: (itemId: number) => void;
  selectItem: number | undefined;
  isParti: boolean | undefined;
}) => {
  return (
    <div
      className={`flex rounded-2xl w-full h-full shadow-md border-2 ${
        !isParti && selectItem === item.vote_item_id
          ? " border-secondary-orange bg-primary-yellow"
          : ""
      }  ${
        !isParti &&
        `hover: hover:border-secondary-orange hover:bg-primary-yellow`
      }`}
      style={{ overflow: "hidden" }}
      onClick={() => {
        setSelectItem(item.vote_item_id);
      }}
    >
      <Image
        src={defaultImg}
        alt="기본 이미지"
        width="100"
        height="100"
        className="object-contain w-100 h-auto rounded-2xl"
      />
      <div className="ml-2 flex items-center w-full">
        <h2 className="text-lg font-semibold">{item.title}</h2>
      </div>
    </div>
  );
};

export default VoteDetailItemCard;
