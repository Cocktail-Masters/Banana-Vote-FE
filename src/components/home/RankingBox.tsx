import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import goldMedal from "@assets/icons/medals/gold.svg";
import silverMedal from "@assets/icons/medals/silver.svg";
import bronzeMedal from "@assets/icons/medals/bronze.svg";
import normalMedal from "@assets/icons/medals/normal.svg";
import Image from "next/image";

type rankingContents = {
  id: number;
  nickname: string;
  badge_url?: string;
};

type rankingBoxProps = {
  title: string;
  contents?: rankingContents[];
};

const RankingBox = ({ title, contents }: rankingBoxProps) => {
  return (
    <Box>
      <CardHeader width={"100%"} height={"60px"}>
        <Flex
          position="relative"
          justifyContent={"space-between"}
          alignItems={"center"}
          width="100%"
        >
          <Box height={"28px"} width={"auto"} />
          <Heading
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            as="h5"
            size="md"
            width="240px"
            height="28px"
            textAlign="center"
            color={"blue.500"}
          >
            {title}
          </Heading>
          <Box height={"28px"} width={"auto"}>
            <Link href={`/rank`}>
              <Text
                fontSize={"sm"}
                color="gray.400"
                _hover={{ color: "gray.500", textDecoration: "underline" }}
              >
                더보기
                <ChevronRightIcon />
              </Text>
            </Link>
          </Box>
        </Flex>
      </CardHeader>
      <Divider
        width={"90%"}
        borderColor="yellow.500"
        borderWidth="1.5px"
        marginX="auto"
      />
      <CardBody width={"100%"} height={"200px"}>
        {contents &&
          contents.map((content: rankingContents, index: number) => {
            if (index === 0) {
              return (
                <Box key={content.id} mb={2}>
                  <Flex>
                    <Image
                      src={goldMedal}
                      style={{
                        width: "20px",
                        height: "auto",
                      }}
                      alt={"gold medal"}
                    />
                    <Text ml={1} noOfLines={1} fontWeight={"bold"}>
                      {content.nickname}
                    </Text>
                  </Flex>
                </Box>
              );
            } else if (index === 1) {
              return (
                <Box key={content.id} mb={2}>
                  <Flex>
                    <Image
                      src={silverMedal}
                      style={{
                        width: "20px",
                        height: "auto",
                      }}
                      alt={"silver medal"}
                    />
                    <Text ml={1} noOfLines={1} fontWeight={"bold"}>
                      {content.nickname}
                    </Text>
                  </Flex>
                </Box>
              );
            } else if (index === 2) {
              return (
                <Box key={content.id} mb={2}>
                  <Flex>
                    <Image
                      src={bronzeMedal}
                      style={{
                        width: "20px",
                        height: "auto",
                      }}
                      alt={"bronze medal"}
                    />
                    <Text ml={1} noOfLines={1} fontWeight={"bold"}>
                      {content.nickname}
                    </Text>
                  </Flex>
                </Box>
              );
            } else {
              return (
                <Box key={content.id} mb={2}>
                  <Flex>
                    <Image
                      src={normalMedal}
                      style={{
                        width: "20px",
                        height: "auto",
                      }}
                      alt={"normal medal"}
                    />
                    <Text ml={1} noOfLines={1} fontWeight={"bold"}>
                      {content.nickname}
                    </Text>
                  </Flex>
                </Box>
              );
            }
          })}
      </CardBody>
    </Box>
  );
};

export default RankingBox;
