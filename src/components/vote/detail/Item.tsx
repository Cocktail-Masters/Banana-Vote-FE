"use client";

import Loading from "@/components/Loading";
import { useVoteDetailQuery } from "@/hooks/reactQuery/useVoteDetailQuery";
import {
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  StackDivider,
  Heading,
  Button,
  Tag,
} from "@chakra-ui/react";
import { Suspense, useState } from "react";
import VoteDetailItemCard from "./ItemCard";

const VoteDetailItem = () => {
  const { data } = useVoteDetailQuery({ queryKey: "voteDetail", postId: 1 });
  const [selectItem, setSelectItem] = useState<number | undefined>();

  const select = (itemId: number) => {
    if (itemId === selectItem) {
      setSelectItem((prev: number | undefined) => {
        return undefined;
      });
    } else {
      setSelectItem((prev: number | undefined) => {
        return itemId;
      });
    }
  };
  console.log(selectItem);
  return (
    <Suspense fallback={<Loading />}>
      {data && (
        <Card paddingLeft={"5%"} paddingRight={"5%"}>
          <Stack
            divider={<StackDivider />}
            spacing="0"
            borderBottomWidth={"5px"}
          >
            <CardHeader display={"flex"} alignItems={"center"}>
              <Text marginRight={"20px"}>
                {data.is_closed ? "종료" : "진행중"}
              </Text>
              <Heading fontSize={"2xl"} fontWeight={"bold"}>
                {data.vote_title}
              </Heading>
            </CardHeader>
            <Box></Box>
          </Stack>
          <CardBody>
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Flex w={"70%"}>
                <Text>투표 기간</Text>
                <Text ml={"1%"}>7일 남음</Text>
              </Flex>
              <Flex w={"30%"} justifyContent={"end"}>
                <Text mr={"1%"}>조회수</Text>
                <Text mr={"1%"}>{data.n_view}</Text>
              </Flex>
            </Flex>
            <Flex flexDir={"column"}>
              {data.vote_item.map((e, i) => (
                <VoteDetailItemCard key={i} item={e} setSelectItem={select} selectItem = {selectItem} />
              ))}
            </Flex>
            <Flex w={"100%"} justifyContent={"center"} marginTop={"25px"}>
              <Button>투표하기</Button>
            </Flex>
          </CardBody>
          <CardFooter>
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Flex w={"70%"}>
                {data.tag.map((e, i) => (
                  <Tag key={i} mr={"5px"}>
                    {e}
                  </Tag>
                ))}
              </Flex>
              <Flex>
                <Button marginRight={"10px"}>수정</Button>
                <Button>삭제</Button>
              </Flex>
            </Flex>
          </CardFooter>
        </Card>
      )}
    </Suspense>
  );
};

export default VoteDetailItem;
