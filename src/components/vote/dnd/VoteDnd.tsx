"use client";

import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import VoteItemCard from "../VoteItemCard";
import { voteItemTypes } from "../CreateVote";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

import plusImage from "@assets/images/plus.svg";
import VoteItemLayout from "../VoteItemLayout";

const reorder = (
  list: voteItemTypes,
  startIndex: number,
  endIndex: number
): voteItemTypes => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

type VoteDndPropsType = {
  voteItems: voteItemTypes;
  setVoteItems: React.Dispatch<React.SetStateAction<voteItemTypes>>;
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

  const onDragUpdate = (result: any) => {
    // dropped outside the list(리스트 밖으로 드랍한 경우)
    console.log("onDragUpdate", result);
  };

  const onChangeHandler = (value: string, index: number) => {
    setVoteItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].content = value;
      return newItems;
    });
  };

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <>
      {state && (
        <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <div className="droppable">
                  {voteItems.map((item, index) => (
                    <Draggable
                      key={index}
                      draggableId={`item-${index}`}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div>
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              // style={getItemStyle(
                              //   snapshot.isDragging,
                              //   provided.draggableProps.style
                              // )}
                            >
                              <VoteItemCard
                                image={item.image}
                                content={item.content}
                                onChangeHandler={onChangeHandler}
                                index={index}
                              />
                            </div>
                          </div>
                        );
                      }}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
      <VoteItemLayout>
        <Button
          w={"100%"}
          h={"100%"}
          background={"white"}
          _hover={{ bg: "#ffffff" }}
          onClick={() => {
            setVoteItems((v) => [...v, { image: "", content: "" }]);
          }}
        >
          <Image src={plusImage} alt={"plus button"} />
        </Button>
      </VoteItemLayout>
    </>
  );
};

export default Item;
