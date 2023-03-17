/**
 * @author mingyu
 * @description 메인페이지에서 랭킹 리스트 표시하는 영역
 */
"use client";
import { Card } from "@chakra-ui/react";
import { rankDummyList } from "./dummys";
import RankingBox from "./RankingBox";

const RankingListArea = () => {
  return (
    <Card
      width={"360px"}
      height={"260px"}
      mt={4}
      mb={4}
      marginX="auto"
      userSelect={"none"}
    >
      <RankingBox title={"시즌 랭킹"} contents={rankDummyList} />
    </Card>
  );
};

export default RankingListArea;
