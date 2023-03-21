"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { useState } from "react";

const CommentListArea = () => {
  const [opinionType, setOpinionType] = useState<"recent" | "agree">("recent");

  return (
    <Box
      width={"100%"}
      minH={"200px"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Flex w={"95%"} h={"50px"} justifyContent={"space-between"}>
        <Text fontSize={"xl"} fontWeight={"bold"} marginBottom={"2%"}>
          36개의 댓글
        </Text>
        <Flex minW={"150px"} w={"20%"} h={"100%"} justifyContent={"end"}>
          <Button
            background={opinionType === "agree" ? "#FCDA76" : "none"}
            onClick={() => {
              setOpinionType("agree");
            }}
          >
            공감순
          </Button>
          <Flex alignItems={"start"} h={"100%"}>
            <Text fontSize={"2xl"}>|</Text>
          </Flex>
          <Button
            background={opinionType === "recent" ? "#FCDA76" : "none"}
            onClick={() => {
              setOpinionType("recent");
            }}
          >
            최신순
          </Button>
        </Flex>
      </Flex>
      <CommentInput />
      <CommentList opinionType={opinionType} />
    </Box>
  );
};

export default CommentListArea;
