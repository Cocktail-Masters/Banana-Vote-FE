/**
 * @author mingyu
 * @description 투표 항목들을 CArd 리스트 형태로 표시
 */

import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import VoteItem from "./VoteItem";
import { voteItemType } from "@/types";

const ELEMENTS_PER_LINE = 4; // 한 줄에 표시될 요소 수

const VoteItemList = ({ vote_items }: { vote_items: voteItemType[] }) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Grid
        templateColumns={`repeat(${
          vote_items && vote_items.length < ELEMENTS_PER_LINE
            ? vote_items.length
            : ELEMENTS_PER_LINE
        }, 1fr)`}
        gap={2}
      >
        {vote_items &&
          vote_items.map((item: voteItemType, index: number) => {
            return (
              <GridItem key={index}>
                <VoteItem imageLink={item.image} content={item.title} />
              </GridItem>
            );
          })}
      </Grid>
    </Flex>
  );
};

export default VoteItemList;
