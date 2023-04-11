"use client";

import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import VoteItemCard from "@components/vote/create/VoteItemCard";
import Image from "next/image";

import plusImage from "@assets/images/plus.svg";
import VoteItemLayout from "@components/vote/create/VoteItemLayout";
import { createVoteItemType, createVoteItemTypes } from "@/types";
import { getDefaultVoteItem } from "@/common/getVoteItem";

const reorder = (
  list: createVoteItemTypes,
  startIndex: number,
  endIndex: number
): createVoteItemTypes => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

type VoteDndPropsType = {
  voteItems: createVoteItemTypes;
  setVoteItems: React.Dispatch<React.SetStateAction<createVoteItemTypes>>;
};

const Item = ({ voteItems, setVoteItems }: VoteDndPropsType) => {
  const [state, setState] = useState(false);
  const onDragEnd = (result: any) => {
    // dropped outside the list(리스트 밖으로 드랍한 경우)
    if (!result.destination) {
      return;
    }
    setVoteItems((prevItem) => {
      return reorder(prevItem, result.source.index, result.destination.index);
    });
  };

  const onChangeHandler = (value: string, index: number) => {
    setVoteItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].title = value;
      return newItems;
    });
  };

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <div>
      {state && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(droppableProvided, snapshot) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                <div className="droppable">
                  {voteItems.map((voteItem, index) => (
                    <Draggable
                      key={voteItem.id}
                      draggableId={String(voteItem.id)}
                      index={index}
                    >
                      {(draggableProvided, snapshot) => {
                        return (
                          <div className={`vote-dnd-${index}`}>
                            <div
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.draggableProps}
                              {...draggableProvided.dragHandleProps}
                            >
                              <VoteItemCard
                                voteItem={voteItem}
                                setVoteItems={setVoteItems}
                                onChangeHandler={onChangeHandler}
                                index={index}
                              />
                            </div>
                          </div>
                        );
                      }}
                    </Draggable>
                  ))}
                  {droppableProvided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}

      <VoteItemLayout>
        <button
          className={
            "flex  h-full w-full items-center justify-center bg-white hover:bg-[#ffffff]"
          }
          onClick={() => {
            setVoteItems((v) => [...v, getDefaultVoteItem()]);
          }}
        >
          <Image src={plusImage} alt={"plus button"} />
        </button>
      </VoteItemLayout>
    </div>
  );
};

export default Item;
