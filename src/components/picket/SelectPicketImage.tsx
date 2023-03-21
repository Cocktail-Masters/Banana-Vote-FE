"use client";

import { picketType } from "@/types";
import { Box, Flex, ModalBody } from "@chakra-ui/react";
import Image from "next/image";
import PicketDropzone from "./PicketDropzone";

const SelectPicketImage = ({
  picket_image_url,
  position,
  price,
}: picketType) => {
  return (
    <ModalBody w={"100%"} h={"fit-content"} marginBottom={"10px"}>
      <Box w={"100%"} minH={"200px"} marginBottom={"10px"}>
        <Image
          src={picket_image_url}
          alt={"picket Image"}
          width={1200}
          height={200}
          style={{
            height: "200px",
            width: "auto",
            maxWidth: "800",
            margin: "auto",
          }}
        />
      </Box>
      <PicketDropzone change={true} price={price} position={position} />
    </ModalBody>
  );
};

export default SelectPicketImage;
