"use client";

import { Box } from "@chakra-ui/react";

const VoteItemLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      h={"120px"}
      borderRadius={"20px"}
      background={"white"}
      boxShadow={"base"}
      overflow={"hidden"}
      m={2}
    >
      {children}
    </Box>
  );
};
export default VoteItemLayout;
