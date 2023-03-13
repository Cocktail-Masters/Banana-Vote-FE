"use client";

import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

const VoteDetailLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      w="100%"
      minHeight={"100vh"}
      height={"100%"}
      justifyContent={"center"}
    >
      <Box maxW={"1200px"} w="100%">
        {children}
      </Box>
    </Flex>
  );
};

export default VoteDetailLayout;
