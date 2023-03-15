"use client";

import { usePicketQuery } from "@/hooks/useFetchs";
import { Box, Flex, Button, useDisclosure } from "@chakra-ui/react";
import Carousel from "./Carousel";
import PicketAreaModal from "./PicketModal";

const PicketArea = () => {
  const { data, isLoading } = usePicketQuery({ queryKey: "picket", voteId: 1 });
  return (
    <Flex
      w={"100%"}
      height={"300px"}
      justifyContent="center"
      flexDir={"column"}
    >
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
          <PicketAreaModal />
        </Box>
      </Flex>
      <Flex maxW={"1200px"} h={"180px"} padding="1%">
        <Box
          width={"100%"}
          maxH={"160px"}
          height="100%"
          position={"relative"}
          borderRadius={"20px"}
          backgroundColor="#D9D9D9"
          // overflow={"hidden"}
        >
          {data !== undefined && <Carousel pickets={data?.pickets} />}
        </Box>
      </Flex>
    </Flex>
  );
};

export default PicketArea;
