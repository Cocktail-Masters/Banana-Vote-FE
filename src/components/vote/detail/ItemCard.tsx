import { Card, CardBody, Heading, Stack } from "@chakra-ui/react";
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
    <Card
      direction={"row"}
      overflow={"hidden"}
      variant="outline"
      border={
        !isParti && selectItem === item.vote_item_id
          ? "solid #F5B800"
          : "solid rgba(255,255,255,0)"
      }
      bg={!isParti && selectItem === item.vote_item_id ? "#FCDA76" : "white"}
      _hover={{
        bg: !isParti && "#FCDA76",
        border: !isParti && "solid #F5B800",
      }}
      onClick={() => {
        setSelectItem(item.vote_item_id);
      }}
    >
      <Image
        src={defaultImg}
        alt={"기본 이미지"}
        width={"100"}
        height={"100"}
        style={{
          objectFit: "contain",
          width: "100",
          height: "auto",
        }}
      />
      <Stack>
        <CardBody w={"100%"} h={"100%"}>
          <Heading
            size="md"
            w={"100%"}
            h={"100%"}
            display={"flex"}
            alignItems={"center"}
          >
            {item.title}
          </Heading>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default VoteDetailItemCard;
