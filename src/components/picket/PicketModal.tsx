"use client";
import { picketsType, picketType } from "@/types";
import { ArrowBackIcon } from "@chakra-ui/icons";
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
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import PicketAreaModalContent from "./ModalContent";
import SelectPicketImage from "./selectPicketImage";

type picketChangeType = {
  change: boolean;
  picket: picketType;
};

const PicketAreaModal = ({ pickets }: picketsType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [changeState, setChangeState] = useState<picketChangeType>({
    change: false,
    picket: {
      picket_image_url: "",
      position: 0,
      price: 0,
    },
  });

  const onClick = ({ change, picket }: picketChangeType) => {
    console.log("picket", picket);
    setChangeState((prev) => {
      return { change, picket };
    });
  };

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor={"#AEE6E3"}
        borderRadius={"20px"}
      >
        참여하기
      </Button>

      <Modal
        isOpen={isOpen}
        size={"4xl"}
        onClose={() => {
          setChangeState({
            change: false,
            picket: {
              picket_image_url: "",
              price: 0,
              position: 0,
            },
          });
          onClose();
        }}
      >
        <ModalOverlay onClick={() => {}} />
        <ModalContent w={"100%"} h={"fit-content"}>
          <ModalHeader textAlign={"center"} position="relative">
            {changeState.change && (
              <Box
                position={"absolute"}
                top={"5px"}
                onClick={() => {
                  setChangeState({
                    change: false,
                    picket: {
                      picket_image_url: "",
                      price: 0,
                      position: 0,
                    },
                  });
                }}
              >
                <ArrowBackIcon />
              </Box>
            )}
            <Text>피캣 올리기</Text>
          </ModalHeader>

          <ModalCloseButton />
          {changeState.change ? (
            <SelectPicketImage
              picket_image_url={changeState.picket.picket_image_url}
              position={changeState.picket.position}
              price={changeState.picket.price}
            />
          ) : (
            <PicketAreaModalContent pickets={pickets} onChangeState={onClick} />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PicketAreaModal;
