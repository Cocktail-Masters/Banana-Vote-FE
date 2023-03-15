"use client";
import { usePicketQuery } from "@/hooks/useFetchs";
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

const PicketAreaModalContent = () => {
  return (
    <ModalBody>
      {/* {data.pickets.map((e, i) => (
        <div key={i}>
          <Image
            src={e.picket_image_url}
            width={200}
            height={200}
            alt={"피켓 이밎"}
          ></Image>
          <div>{e.price}</div>
        </div>
      ))} */}
    </ModalBody>
  );
};

export default PicketAreaModalContent;
