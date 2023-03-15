"use client";

import { Box, Flex, Button } from "@chakra-ui/react";

const PicketArea = () => {
  return (
    <Flex w={"100%"} height={"20%"} justifyContent="center" flexDir={"column"}>
      <Flex
        w="100%"
        h={"25%"}
        justifyContent={"space-between"}
        alignItems="center"
        marginBottom={"1%"}
      >
        <Box
          fontWeight={"extrabold"}
          fontSize={"2xl"}
          textAlign={"center"}
          padding={"3%"}
        >
          선거 운동
        </Box>
        <Box padding={"10px"} marginRight={"10px"}>
          <Button backgroundColor={"#AEE6E3"} borderRadius={"20px"}>
            참여하기
          </Button>
        </Box>
      </Flex>
      <Flex h={"80%"} padding="1%">
        <Box
          width={"100%"}
          height="100%"
          borderRadius={"20px"}
          backgroundColor="#D9D9D9"
        >
          피켓
        </Box>
      </Flex>
    </Flex>
  );
};

export default PicketArea;
