/**
 * @author mingyu
 * @description 메인페이지에서 인기 투표, 관심 투표 표시하는 영역
 */
import { Card } from "@chakra-ui/react";
import { useState } from "react";
import { recDummyList } from "./dummys";
import RecommendBox from "./RecommendBox";

const RecommendArea = () => {
  const [recommendMode, setRecommendMode] = useState(true);

  return (
    <Card
      width={"360px"}
      height={"260px"}
      mt={4}
      mb={4}
      marginX="auto"
      userSelect={"none"}
    >
      {recommendMode ? (
        <RecommendBox
          recommendMode={recommendMode}
          setRecommendMode={setRecommendMode}
          title={"지금 인기있는 투표"}
          contents={recDummyList[0]}
        />
      ) : (
        <RecommendBox
          recommendMode={recommendMode}
          setRecommendMode={setRecommendMode}
          title={"관심있을만한 최신 투표"}
          contents={recDummyList[1]}
        />
      )}
    </Card>
  );
};

export default RecommendArea;
