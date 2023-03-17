/**
 * @author mingyu
 */
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  CardBody,
  CardHeader,
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
      {contents &&
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
        })}
    </Box>
  );
};

export default RecommendBox;
