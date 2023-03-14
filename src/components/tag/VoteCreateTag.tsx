"use client";
import {
  Box,
  HStack,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { size } from "lodash";
import { useCallback, useEffect, useState } from "react";

type VoteCreatTagPropsType = {
  tagArray: string[];
  setTagArray: React.Dispatch<React.SetStateAction<string[]>>;
};

const VoteCreatTag = ({ tagArray, setTagArray }: VoteCreatTagPropsType) => {
  const [tagString, setTagString] = useState<string>("");
  const [state, setState] = useState(false);
  const tagSize = "lg";
  const onClickTagCloseHandler = (index: number) => {
    if (tagArray) {
      setTagArray((prevTagArray) => {
        const newTagArray = [...prevTagArray];
        newTagArray.splice(index, 1);
        return newTagArray;
      });
    }
  };

  const textWidthCalculator = useCallback(
    (defaultWidth: number): string => {
      const canvas: HTMLCanvasElement | null = document.getElementById(
        "canvas"
      ) as HTMLCanvasElement;
      console.log(canvas);
      if (canvas !== null) {
        const ctx = canvas.getContext("2d");
        if (ctx !== null) {
          ctx.font = "20px Noto Sans";
          let textWidth = ctx.measureText("#").width;
          for (let letter of tagString.split("")) {
            console.log(textWidth);
            textWidth += ctx.measureText(letter).width;
          }
          console.log(textWidth);
          const width = `${textWidth + defaultWidth}px`;
          console.log(width);
          return width;
        }
      }
      return `${0}px`;
    },
    [tagString]
  );

  const keyPressHandler = (e: any) => {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      setTagArray((prevArray) => {
        return [...prevArray, tagString];
      });
      setTagString("");
    } else {
      setTagString((v) => {
        return v + e.key;
      });
    }
  };

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <>
      <HStack spacing={4}>
        {tagArray &&
          tagArray.map((v, index) => {
            return (
              <Tag
                size={tagSize}
                key={v + index.toString()}
                borderRadius="full"
                variant="solid"
                colorScheme="green"
              >
                <TagLabel>{`#${v}`}</TagLabel>
                <TagCloseButton onClick={() => onClickTagCloseHandler(index)} />
              </Tag>
            );
          })}
        <Tag
          size={tagSize}
          borderRadius="full"
          variant="solid"
          colorScheme="green"
        >
          <TagLabel>
            {state && (
              <Input
                h="100%"
                w={textWidthCalculator(30)}
                fontSize={"20px"}
                color={"black"}
                border={"none"}
                value={"#" + tagString}
                onKeyPress={keyPressHandler}
              />
            )}
          </TagLabel>
        </Tag>
      </HStack>
    </>
  );
};
export default VoteCreatTag;
