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
  recommendMode: boolean;
  setRecommendMode: Dispatch<SetStateAction<boolean>>;
  title: string;
  contents?: recommendContents[];
};

const RecommendBox = ({
  recommendMode,
  setRecommendMode,
  title,
  contents,
}: recommendBoxProps) => {
  return (
    <Box>
      <CardHeader width={"100%"} height={"60px"}>
        <Flex
          position="relative"
          justifyContent={"space-between"}
          alignItems={"center"}
          width="100%"
        >
          <ChevronLeftIcon
            style={{ height: "28px", width: "auto", cursor: "pointer" }}
            onClick={() => setRecommendMode(!recommendMode)}
          />
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
          <ChevronRightIcon
            style={{ height: "28px", width: "auto", cursor: "pointer" }}
            onClick={() => setRecommendMode(!recommendMode)}
          />
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
      </CardBody>
    </Box>
  );
};

export default RecommendBox;
