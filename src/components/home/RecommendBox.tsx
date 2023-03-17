/**
 * @author mingyu
 */
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

type recommendContents = {
  id: number;
  title: string;
};

type recommendBoxProps = {
  contents?: recommendContents[];
};

const RecommendBox = ({ contents }: recommendBoxProps) => {
  return (
    <Box width={"100%"} height={"100%"}>
      {!contents || contents.length === 0 ? (
        <Box>
          <Center fontWeight="bold" mb={2} height={"24px"} lineHeight={"24px"}>
            글이 없습니다.
          </Center>
          <Center
            fontWeight="bold"
            mb={2}
            height={"24px"}
            lineHeight={"24px"}
          ></Center>
          <Center
            fontWeight="bold"
            mb={2}
            height={"24px"}
            lineHeight={"24px"}
          ></Center>
          <Center
            fontWeight="bold"
            mb={2}
            height={"24px"}
            lineHeight={"24px"}
          ></Center>
          <Center
            fontWeight="bold"
            mb={2}
            height={"24px"}
            lineHeight={"24px"}
          ></Center>
        </Box>
      ) : (
        contents.map((content: recommendContents) => {
          return (
            <Box key={content.id} mb={2}>
              <Link href={`/vote/detail/${content.id}`}>
                <Text
                  noOfLines={1}
                  fontWeight={"bold"}
                  _hover={{ color: "blue.500", textDecoration: "underline" }}
                >
                  {content.title}
                </Text>
              </Link>
            </Box>
          );
        })
      )}
    </Box>
  );
};

export default RecommendBox;
