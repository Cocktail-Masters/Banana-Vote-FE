"use client";
import { Box, Button, Divider, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import useSelectButton from "@/hooks/useSelectData";

type VoteOptionToggleButtonPropsType<T> = {
  title?: string;
  isData: T;
  onClickHandler: (newState: T) => void;
  toggleContent: Array<{ data: T; content: string }>;
};

function VoteOptionToggleButton<T>({
  title,
  isData,
  toggleContent,
  onClickHandler,
}: VoteOptionToggleButtonPropsType<T>) {
  return (
    <>
      <Flex alignItems={"center"}>
        <Flex p={"10px"} textAlign={"center"}>
          {title}
        </Flex>
        {toggleContent.map(({ data, content }, index) => {
          const indexCheck = () => {
            switch (index) {
              case 0:
                return "16px 0px 0px 16px";
              case toggleContent.length - 1:
                return "0px 16px 16px 0px";
            }
            return "none";
          };

          return (
            <Button
              key={content}
              onClick={() => onClickHandler(data)}
              style={{
                background: isData === data ? "#FFA45B" : "#D9D9D9",
                fontWeight: isData === data ? 700 : 500,
              }}
              borderRadius={indexCheck()}
            >
              {content}
            </Button>
          );
        })}
      </Flex>
    </>
  );
}
export default VoteOptionToggleButton;
