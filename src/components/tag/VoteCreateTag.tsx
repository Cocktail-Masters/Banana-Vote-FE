"use client";
import { useCallback, useEffect, useState } from "react";
import Tag from "./Tag";
import TagCloseButton from "./TagCloseButton";

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
    (defaultWidth: number): number => {
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
          const width = textWidth + defaultWidth;
          return width;
        }
      }
      return 0;
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
      <div className="flex flex-wrap gap-2">
        {tagArray &&
          tagArray.map((v, index) => {
            return (
              <Tag key={v + index.toString()}>
                <>
                  <div className={"font-sans text-xl"}>{`#${v}`}</div>
                  <TagCloseButton
                    onClick={() => onClickTagCloseHandler(index)}
                  ></TagCloseButton>
                </>
              </Tag>
            );
          })}
        <Tag>
          <div className="tag-label text-xl font-bold">
            <span
              className={`hash-tag color-[${isFocus ? "black" : "#d9d9d9"}]`}
            >
              #
            </span>
            {state && (
              <input
                className={`tag-input h-full bg-[#F9F6ED] font-sans text-xl outline-none`}
                style={{ width: `${textWidthCalculator(5)}px` }}
                type="text"
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
          </div>
        </Tag>
      </div>
    </>
  );
};
export default VoteCreatTag;
