/**
 * @author mingyu
 * @description 메인페이지에서 인기 투표, 관심 투표 표시하는 영역
 */
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { recDummyList } from "./dummys";
import RecommendBox from "./RecommendBox";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import "./styles/slick.css";
import "./styles/slick-theme.css";

const RecommendArea = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const TITLES = ["지금 인기있는 투표", "관심있을만한 최신 투표"];

  return (
    <Card
      width={"360px"}
      height={"260px"}
      mt={4}
      mb={4}
      userSelect={"none"}
      position={"relative"}
    >
      <CardHeader width={"100%"} height={"60px"} position={"absolute"}>
        <Flex
          position="relative"
          justifyContent={"center"}
          alignItems={"center"}
          width="100%"
        >
          <Heading
            as="h5"
            size="md"
            width="240px"
            height="28px"
            textAlign="center"
            color={"blue.500"}
          >
            {TITLES[currentIndex]}
          </Heading>
        </Flex>
      </CardHeader>
      <Divider
        width={"90%"}
        borderColor="yellow.500"
        borderWidth="1.5px"
        marginX="auto"
        marginTop={"60px"}
      />

      <CardBody width="100%" height="200px">
        <Slider
          dots={true}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          prevArrow={
            <ChevronLeftIcon
              onClick={() => alert("hello")}
              style={{ height: "36px", width: "auto", cursor: "pointer" }}
            />
          }
          nextArrow={
            <ChevronRightIcon
              style={{ height: "36px", width: "auto", cursor: "pointer" }}
            />
          }
          initialSlide={currentIndex}
          afterChange={(index: number) => {
            setCurrentIndex(index);
          }}
        >
          <RecommendBox contents={recDummyList[0]} />
          <RecommendBox contents={recDummyList[1]} />
        </Slider>
      </CardBody>
    </Card>
  );
};

export default RecommendArea;
