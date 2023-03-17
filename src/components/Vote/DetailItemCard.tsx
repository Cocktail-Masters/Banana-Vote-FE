"use client";

import {
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  StackDivider,
  Heading,
  Button,
  Tag,
} from "@chakra-ui/react";
import Image from "next/image";
import defaultImg from "@assets/images/defalut_vote_element_img.png";

const VoteDetailItemCard = () => {
  return (
    <Card paddingLeft={"5%"} paddingRight={"5%"}>
      <Stack divider={<StackDivider />} spacing="0" borderBottomWidth={"5px"}>
        <CardHeader display={"flex"} alignItems={"center"}>
          <Text marginRight={"20px"}>종료</Text>
          <Heading fontSize={"2xl"} fontWeight={"bold"}>
            투표 제목
          </Heading>
        </CardHeader>
        <Box></Box>
      </Stack>
      <CardBody>
        <Flex justifyContent={"space-between"}>
          <Flex>
            <Text>투표 기간</Text>
            <Text>7일 남음</Text>
          </Flex>
          <Flex>
            <Text>조회수</Text>
            <Text>17,342</Text>
          </Flex>
        </Flex>
        <Flex flexDir={"column"}>
          <Card
            direction={"row"}
            overflow={"hidden"}
            variant="outline"
            border={"solid rgba(255,255,255,0)"}
            _hover={{
              bg: "#FCDA76",
              border: "solid #F5B800",
            }}
          >
            <Image
              src={defaultImg}
              alt={"기본 이미지"}
              width={"100"}
              height={"100"}
              style={{
                objectFit: "contain",
                width: "100",
                height: "auto",
              }}
            />
            <Stack>
              <CardBody w={"100%"} h={"100%"}>
                <Heading
                  size="md"
                  w={"100%"}
                  h={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  부먹먹
                </Heading>
              </CardBody>
            </Stack>
          </Card>
        </Flex>
        <Flex w={"100%"} justifyContent={"center"} marginTop={"25px"}>
          <Button>투표하기</Button>
        </Flex>
      </CardBody>
      <CardFooter>
        <Flex w={"100%"} justifyContent={"space-between"}>
          <Flex>
            <Tag>#탕수육</Tag>
          </Flex>
          <Flex>
            <Button marginRight={"10px"}>수정</Button>
            <Button>삭제</Button>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default VoteDetailItemCard;
