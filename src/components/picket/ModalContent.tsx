"use client";
import { picketType } from "@/types";
import { ModalBody, Button, Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import banana from "@assets/icons/banana_svgrepo.com.svg";
import React from "react";
import PicketDropzone from "./PicketDropzone";
type picketChangeType = {
  change: boolean;
  picket: picketType;
};

const PicketAreaModalContent = ({
  pickets,
  onChangeState,
}: {
  pickets: picketType[];
  onChangeState: ({ change, picket }: picketChangeType) => void;
}) => {
  const onClick = ({ picket }: { picket: picketType }) => {
    onChangeState({ change: true, picket });
  };
  return (
    <ModalBody w={"100%"} h={"fit-content"} paddingBottom={"20px"}>
      {pickets.map((e, i) => (
        <Box key={i}>
          <Image
            src={e.picket_image_url}
            width={1200}
            height={200}
            style={{
              height: "200px",
              width: "auto",
              maxWidth: "800",
              margin: "auto",
            }}
            alt={"피켓 이밎"}
          ></Image>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Button
              onClick={() => {
                onClick({
                  picket: {
                    picket_image_url: e.picket_image_url,
                    price: e.price,
                    position: e.position,
                  },
                });
              }}
            >
              <Image src={banana} alt={"바나나"} style={{ width: "30px" }} />
              <Text fontSize={"md"} fontWeight={"bold"}>
                {e.price} 으로 현재 피캣 바꾸기
              </Text>
            </Button>
            <Button>🚨</Button>
          </Flex>
        </Box>
      ))}
      <Box
        w={"100%"}
        h={"fit-content"}
        marginBottom={"150px"}
        marginTop={"20px"}
      >
        <PicketDropzone change={false} />
      </Box>
    </ModalBody>
  );
};

export default PicketAreaModalContent;
