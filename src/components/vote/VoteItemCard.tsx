import { Card, Image, Stack, Input } from "@chakra-ui/react";
import VoteItemLayout from "./VoteItemLayout";

const VoteItemCard = ({
  image,
  content,
  index,
  onChangeHandler,
}: {
  image: string;
  content: string;
  index: number;
  onChangeHandler: (value: string, index: number) => void;
}) => {
  return (
    <>
      <VoteItemLayout>
        <Card
          direction={{ base: "column", sm: "row" }}
          width={"100%"}
          height={"100%"}
        >
          <Image
            objectFit="cover"
            w={"200px"}
            h={"120px"}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="asdf"
          />

          <Stack w={"100%"} h={"100%"}>
            <Input
              w={"100%"}
              h={"100%"}
              value={content}
              onChange={(e) => onChangeHandler(e.target.value, index)}
            ></Input>
          </Stack>
        </Card>
      </VoteItemLayout>
    </>
  );
};
export default VoteItemCard;
