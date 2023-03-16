"use client";

import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { picketType } from "@/types";

const PicketDropzone = ({
  change,
  price,
  position,
}: {
  change: boolean;
  price?: number;
  position?: number;
}) => {
  const [file, setFile] = useState<File>();
  const [fileType, setFileType] = useState<string>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);

  const removePicture = () => {
    setFile(undefined);
  };
  console.log("price?:", price, "position", position);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Box w={"100%"} marginBottom={"20px"}>
      {file ? (
        <Flex
          w={"100%"}
          h={"250px"}
          borderWidth="1px"
          borderRadius="lg"
          justifyContent={"center"}
          position={"relative"}
        >
          <Flex
            w={"fit-content"}
            onClick={removePicture}
            position="absolute"
            right={"10px"}
            top={"5px"}
          >
            <CloseIcon />
          </Flex>
          <Image
            src={URL.createObjectURL(file)}
            width={1280}
            height={720}
            style={{
              height: "200px",
              width: "auto",
              maxWidth: "800",
              margin: "auto",
            }}
            alt={"미리보기"}
          />
        </Flex>
      ) : (
        <Box
          w="100%"
          h="250px"
          {...getRootProps()}
          borderWidth="1px"
          borderRadius="lg"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <Flex
              w={"100%"}
              h={"100%"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>이곳에 파일을 드래그 하거나</Text>
              <Text fontSize={"2xl"}>파일을 직접 선택해주세요!</Text>
              <Text fontSize={"md"}>
                사용 가능한 확장자는 JPG,PNG,WEBP입니다.
              </Text>
            </Flex>
          ) : (
            <Flex
              w={"100%"}
              h={"100%"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>이곳에 파일을 드래그 하거나</Text>
              <Text fontSize={"2xl"}>파일을 직접 선택해주세요!</Text>
              <Text fontSize={"md"}>
                사용 가능한 확장자는 JPG,PNG,WEBP입니다.
              </Text>
            </Flex>
          )}
        </Box>
      )}
      <Box
        w={"100%"}
        h={"20%"}
        marginTop={"5%"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Text>최소 바나나 : {change ? price : "1000"}</Text>
        <Flex>
          <Input></Input>
          <Button>제출</Button>
        </Flex>
        <Box>
          <Text>가지고 있는 바나나</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PicketDropzone;
