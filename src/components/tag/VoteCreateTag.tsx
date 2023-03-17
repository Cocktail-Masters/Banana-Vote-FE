"use client";
import {
  Box,
  Flex,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";

type VoteCreatTagPropsType = {
  tagArray: string[];
  setTagArray: React.Dispatch<React.SetStateAction<string[]>>;
};

const VoteCreatTag = ({ tagArray, setTagArray }: VoteCreatTagPropsType) => {
  const [tagString, setTagString] = useState<string>("");
  const [state, setState] = useState(false);
  const tagSize = "lg";
  const [isFocus, setIsFocus] = useState(false);

  const textWidthCalculator = useCallback(
    (defaultWidth: number): string => {
      const canvas: HTMLCanvasElement | null = document.getElementById(
        "canvas"
      ) as HTMLCanvasElement;
      if (canvas !== null) {
        const ctx = canvas.getContext("2d");
        if (ctx !== null) {
          ctx.font = "20px Noto Sans";
          let textWidth = ctx.measureText("#").width;
          for (let letter of tagString.split("")) {
            textWidth += ctx.measureText(letter).width;
          }
          const width = `${textWidth + defaultWidth}px`;
          return width;
        }
      }
      return `${0}px`;
    },
    [tagString]
  );

  const addTag = () => {
    if (tagString.length > 0) {
      setTagArray((prevArray) => {
        return [...prevArray, tagString];
      });
      setTagString("");
    }
  };

  const deleteTag = () => {
    if (tagString.length === 0) {
      setTagArray((prevArray) => {
        const newArray = [...prevArray];
        const temp = newArray.pop();
        if (temp) {
          setTagString(temp);
        } else {
          setTagString("");
        }
        return newArray;
      });
    }
  };

  const onClickTagCloseHandler = (index: number) => {
    if (tagArray) {
      setTagArray((prevTagArray) => {
        const newTagArray = [...prevTagArray];
        newTagArray.splice(index, 1);
        return newTagArray;
      });
    }
  };

  const onKeyDownHandler = async (e: any) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key == "Enter" || e.code == "Enter" || e.keyCode == 13) {
      addTag();
    } else if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      addTag();
    } else if (
      e.key == "Backspace" ||
      e.code == "Backspace" ||
      e.keyCode == 8
    ) {
      deleteTag();
    }
  };

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <>
      <Flex flexWrap={"wrap"}>
        {tagArray &&
          tagArray.map((v, index) => {
            return (
              <Tag
                size={tagSize}
                key={v + index.toString()}
                borderRadius="full"
                variant="solid"
                background={"#F9F6ED"}
                color={"black"}
                h="36px"
                m={2}
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
          background={"#F9F6ED"}
          color={"black"}
          h="36px"
          m={2}
        >
          <TagLabel>
            <>
              <Box
                className={"hash-tag"}
                display={"inline"}
                color={isFocus ? "black" : "#d9d9d9"}
              >
                #
              </Box>
              {state && (
                <Input
                  className="tag-input"
                  h="100%"
                  w={textWidthCalculator(5)}
                  fontSize={"20px"}
                  variant="unstyled"
                  value={tagString}
                  onChange={(e) => {
                    setTagString(e.target.value.trim());
                  }}
                  onKeyDown={onKeyDownHandler}
                  onFocus={() => {
                    setIsFocus(true);
                  }}
                  onBlur={() => {
                    setIsFocus(false);
                    addTag();
                  }}
                />
              )}
            </>
          </TagLabel>
        </Tag>
      </Flex>
    </>
  );
};
export default VoteCreatTag;
