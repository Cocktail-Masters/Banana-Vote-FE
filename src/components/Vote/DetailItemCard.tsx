"use client";

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
} from "@chakra-ui/react";

const VoteDetailItemCard = () => {
  return (
    <Card>
      <Stack divider={<StackDivider />} spacing="4">
        <CardHeader display={"flex"} alignItems={"center"}>
          <Text marginRight={"20px"}>종료</Text>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            투표 제목
          </Text>
        </CardHeader>
        <Box></Box>
      </Stack>
      <CardBody>
        <Box>
          <Text>투표 내용</Text>
        </Box>
        <Box>
          <Text>안녕하세요</Text>
        </Box>
      </CardBody>
      <CardFooter>카트 푸터</CardFooter>
    </Card>
  );
};

export default VoteDetailItemCard;
