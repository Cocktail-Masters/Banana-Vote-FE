"use client";
import { picketsType } from "@/types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import PicketAreaModalContent from "./ModalContent";

const PicketAreaModal = ({ pickets }: picketsType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor={"#AEE6E3"}
        borderRadius={"20px"}
      >
        참여하기
      </Button>

      <Modal isOpen={isOpen} size={"4xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"100%"}>
          <ModalHeader>피캣 올리기</ModalHeader>
          <ModalCloseButton />
          <PicketAreaModalContent pickets={pickets} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default PicketAreaModal;
