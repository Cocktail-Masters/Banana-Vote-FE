"use client";
import { Box } from "@chakra-ui/react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

const CommentListArea = () => {
  return (
    <Box width={"100%"} minH={"200px"}>
      <CommentInput />
      <CommentList />
    </Box>
  );
};

export default CommentListArea;
