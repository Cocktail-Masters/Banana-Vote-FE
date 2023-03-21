"use client";

import Loading from "@/components/Loading";
import { usePicketQuery } from "@/hooks/reactQuery/usePicketQuery";
import { Box, Flex, Button, useDisclosure } from "@chakra-ui/react";
import { Suspense } from "react";
import Carousel from "./Carousel";
import PicketAreaModal from "./PicketModal";

const PicketArea = () => {
  const { data } = usePicketQuery({
    queryKey: ["picket"],
    voteId: 1,
  });
  return (
    <Suspense fallback={<Loading />}>
      <Flex
        w={"100%"}
        height={"300px"}
        justifyContent="center"
        flexDir={"column"}
      >
        <Flex
          w="100%"
          h={"25px"}
          justifyContent={"space-between"}
          alignItems="center"
          marginBottom={"15px"}
        >
          <Box
            fontWeight={"extrabold"}
            fontSize={"2xl"}
            textAlign={"center"}
            padding={"3%"}
          >
            선거 운동
          </Box>
          {data !== undefined && (
            <Box padding={"10px"} marginRight={"10px"}>
              <PicketAreaModal pickets={data?.pickets} />
            </Box>
          )}
        </Flex>
        <Flex maxW={"1200px"} h={"200px"} padding="1%">
          <Box
            width={"100%"}
            maxH={"200px"}
            height="200px"
            position={"relative"}
            borderRadius={"20px"}
            backgroundColor="#D9D9D9"
            display={"block"}
            overflow={"hidden"}
          >
            {data !== undefined && <Carousel pickets={data?.pickets} />}
          </Box>
        </Flex>
      </Flex>
    </Suspense>
  );
};

export default PicketArea;
